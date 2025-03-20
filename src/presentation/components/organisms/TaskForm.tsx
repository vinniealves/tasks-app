import React, { useState } from 'react'
import { Button } from 'react-native'
import Input from '../atoms/Input'
import { Task } from '@/src/domain/models/Task'

interface TaskFormProps {
    task?: Task,
    onSubmitForm: (task: Partial<Task>) => void
}

const TaskForm = ({ task, onSubmitForm }: TaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState<string>(task?.title || '')

    const handleTaskForm = () => {
        let data: Partial<Task> = { title: taskTitle, completed: false }
        if (task) data = { id: task.id, ...data }
        onSubmitForm(data)
    }

    return (
        <>
            <Input
                testID={'task_title_input'}
                style={{ backgroundColor: '#FF9' }}
                onChangeText={(text) => setTaskTitle(text)}
                placeholder={'Descrição'}
                value={taskTitle}
                autoFocus={true}
            />
            <Button title={'Concluir'} testID={'save-task-button'} onPress={handleTaskForm} disabled={!taskTitle.trim()} />
        </>
    )
}

export default TaskForm