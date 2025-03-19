export interface ITask {
    id: number;
    title: string;
    completed: boolean;
}

export class Task implements ITask {
    id: number;
    title: string;
    completed: boolean;

    constructor(task: ITask) {
        this.id = task.id;
        this.title = task.title;
        this.completed = task.completed;
    }
}