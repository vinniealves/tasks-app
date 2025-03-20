import { Task } from '@/src/domain/models/Task';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import useFetch, { FetchTypes } from './useFetch';
import TaskRepository from '@/src/domain/repositories/TaskRepository';

interface IUseTasks {
    loading: boolean
    refreshing: boolean
    submitting: boolean
    tasks: Task[]
    onDeleteTask: (id: number) => void
    refreshTasks: () => void
    getTasks: () => void
    onCompleteTask: (task: Task) => void
    onSubmitForm: (data: Partial<Task>) => void
}

const useTasks = (repository: TaskRepository): IUseTasks => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const router = useRouter()

    const { loading, handleFetch, submitting, refreshing } = useFetch()

    const getTasks = async () => {
        try {
            const data = await handleFetch(repository.getTasks(), FetchTypes.FETCH) || []
            setTasks(data)
        } catch (error) {
            Alert.alert('Erro ao buscar tarefas', 'Ocorreu um erro ao buscar as tarefas, tente novamente mais tarde')
        }
    }

    const deleteTask = async (id: number) => {
        try {
            await handleFetch(repository.deleteTask(id))
            getTasks()
        } catch (error) {
            Alert.alert('Erro ao remover tarefa', 'Ocorreu um erro ao remover a tarefa, tente novamente mais tarde')
        }
    }

    const createTask = async (task: Partial<Task>) => {
        try {
            await handleFetch(repository.createTask(task), FetchTypes.SUBMIT)
            router.back()
        } catch (error) {
            Alert.alert('Erro ao criar tarefa', 'Ocorreu um erro ao criar a tarefa, tente novamente mais tarde')
        }
    }

    const updateTask = async (id: number, task: Partial<Task>) => {
        try {
            await handleFetch(repository.updateTask(id, task), FetchTypes.SUBMIT)
            router.back()
        } catch (error) {
            Alert.alert('Erro ao atualizar tarefa', 'Ocorreu um erro ao atualizar a tarefa, tente novamente mais tarde')
        }
    }

    const onCompleteTask = async (task: Task) => {
        try {
            await handleFetch(repository.updateTask(task.id, { title: task.title, completed: true }))
            getTasks()
        } catch (error) {
            Alert.alert('Erro ao completar tarefa', 'Ocorreu um erro ao completar a tarefa, tente novamente mais tarde')
        }
    }

    const refreshTasks = async () => {
        try {
            const data = await handleFetch(repository.getTasks(), FetchTypes.REFRESH) || []
            setTasks(data)
        } catch (error) {
            Alert.alert('Erro ao recarregar tarefas', 'Ocorreu um erro ao recarregar as tarefas, tente novamente mais tarde')
        }
    }

    const onSubmitForm = (data: Partial<Task>) => {
        if (data.id) {
            updateTask(data.id, data)
        } else {
            createTask(data)
        }
    }

    const onDeleteTask = async (id: number) => {
        Alert.alert(
            'Remover tarefa',
            'Deseja realmente remover esta tarefa?',
            [
                {
                    text: 'Não'
                },
                {
                    text: 'Sim',
                    onPress: () => deleteTask(id)
                }
            ]
        )
    }

    return {
        loading,
        refreshing,
        submitting,
        tasks,
        onDeleteTask,
        refreshTasks,
        getTasks,
        onCompleteTask,
        onSubmitForm
    }
}

export default useTasks