import { HttpResponse } from "@/src/infrastructure/http/HttpResponse";
import { Task } from "../models/Task";

export default interface TaskRepository {
    getTasks: () => Promise<HttpResponse<Task[]>>;
    createTask: (task: Partial<Task>) => Promise<HttpResponse<Task>>;
    updateTask: (id: number, task: Partial<Task>) => Promise<HttpResponse<Task>>;
    deleteTask: (id: number) => Promise<HttpResponse<Task>>;
}