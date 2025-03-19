import { Task } from '@/src/domain/models/Task';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import useFetch, { FetchTypes } from './useFetch';
import TaskRepository from '@/src/domain/repositories/TaskRepository';

const useTasks = (repository: TaskRepository) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const router = useRouter()

    const { loading, handleFetch, submitting, refreshing } = useFetch()

    const getTasks = async () => {
        const data = await handleFetch(repository.getTasks(), FetchTypes.FETCH) || []
        setTasks(data)
    }

    const deleteTask = async (id: number) => {
        await handleFetch(repository.deleteTask(id))
        getTasks()
    }

    const createTask = async (task: Partial<Task>) => {
        await handleFetch(repository.createTask(task), FetchTypes.SUBMIT)
        router.back()
    }

    const updateTask = async (id: number, task: Partial<Task>) => {
        await handleFetch(repository.updateTask(id, task), FetchTypes.SUBMIT)
        router.back()
    }

    const onCompleteTask = async (task: Task) => {
        await handleFetch(repository.updateTask(task.id, { title: task.title, completed: true }))
        getTasks()
    }

    const refreshTasks = async () => {
        const data = await handleFetch(repository.getTasks(), FetchTypes.REFRESH) || []
        setTasks(data)
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