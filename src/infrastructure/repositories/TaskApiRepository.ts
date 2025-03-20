import { ITask, Task } from "@/src/domain/models/Task"
import TaskRepository from "@/src/domain/repositories/TaskRepository"
import { ENDPOINTS } from "@/src/infrastructure/constants"
import IHttp from "../http/http.interface"

const TaskApiRepository = (http: IHttp): TaskRepository => ({
    getTasks: async () => {
        try {
            const response = await http.get<ITask[]>(ENDPOINTS.TASKS);
            return {
                ...response,
                data: response.data?.map(task => new Task(task)) || [],
            };
        } catch (error) {
            throw new Error('Erro ao buscar tarefas')
        }
    },
    deleteTask: async (id) => {
        try {
            return await http.delete<Task>(`${ENDPOINTS.TASKS}/${id}`)
        } catch (error) {
            throw new Error('Erro ao remover tarefa')
        }
    },
    createTask: async (task) => {
        try {
            return await http.post<Task>(ENDPOINTS.TASKS, task)
        } catch (error) {
            throw new Error('Erro ao criar tarefa')
        }
    },
    updateTask: async (id, task) => {
        try {
            return await http.put<Task>(`${ENDPOINTS.TASKS}/${id}`, task)
        } catch (error) {
            throw new Error('Erro ao atualizar tarefa')
        }
    },
})

export default TaskApiRepository