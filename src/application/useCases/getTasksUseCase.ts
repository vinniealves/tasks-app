import { HttpResponse } from './../../infrastructure/http/HttpResponse';
import { Task } from "@/src/domain/models/Task";
import TaskRepository from "@/src/domain/repositories/TaskRepository";
import HttpService from '@/src/infrastructure/http/HttpService';
import TaskApiRepository from '@/src/infrastructure/repositories/TaskApiRepository';

class GetTasksUseCase {
    constructor(private taskRepository: TaskRepository) { }

    async execute(): Promise<HttpResponse<Task[]>> {
        return this.taskRepository.getTasks();
    }
}

export { GetTasksUseCase }

const getTasksUseCase = new GetTasksUseCase(TaskApiRepository(HttpService()));

export default getTasksUseCase;