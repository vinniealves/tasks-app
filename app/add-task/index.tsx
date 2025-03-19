
import { Task } from "@/src/domain/models/Task";
import TaskForm from "@/src/presentation/components/organisms/TaskForm";
import { useTasksContext } from "@/src/presentation/contexts/tasksContext";
import { useLocalSearchParams } from "expo-router";

export default function AddTask() {
  const params = useLocalSearchParams()
  const task: Task = params.task && JSON.parse(params.task as string)

  const { onSubmitForm } = useTasksContext()

  return <TaskForm task={task} onSubmitForm={onSubmitForm} />
}
