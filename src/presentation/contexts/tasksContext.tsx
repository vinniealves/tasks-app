import React, { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks";
import { Task } from "../../domain/models/Task";
import HttpService from "../../infrastructure/http/HttpService";
import TaskApiRepository from "@/src/infrastructure/repositories/TaskApiRepository";

interface ITasksContext {
    loading: boolean;
    refreshing: boolean;
    submitting: boolean;
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    refreshTasks: () => void;
    getTasks: () => void;
    onCompleteTask: (task: Task) => void;
    onSubmitForm: (data: Partial<Task>) => void
}

const TasksContext = createContext<ITasksContext>({
    loading: false,
    refreshing: false,
    submitting: false,
    tasks: [],
    onDeleteTask: () => { },
    refreshTasks: () => { },
    getTasks: () => { },
    onCompleteTask: () => { },
    onSubmitForm: () => { }
});

const httpService = HttpService()
const taskService = TaskApiRepository(httpService)

export const TasksProvider = ({ children }: any) => {
    const {
        tasks,
        refreshing,
        submitting,
        loading,
        refreshTasks,
        getTasks,
        onDeleteTask,
        onCompleteTask,
        onSubmitForm
    } = useTasks(taskService)

    return (
        <TasksContext.Provider
            value={{
                tasks,
                refreshing,
                submitting,
                loading,
                refreshTasks,
                getTasks,
                onDeleteTask,
                onCompleteTask,
                onSubmitForm
            }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => useContext(TasksContext);