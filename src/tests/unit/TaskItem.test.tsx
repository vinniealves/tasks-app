import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskItem from '@/src/presentation/components/molecules/TaskItem';

jest.mock('@expo/vector-icons', () => ({
    FontAwesome6: '',
}));

describe('TaskItem', () => {
    it('deve marcar uma tarefa como concluída ao clicar no botão', () => {
        const task = { id: 1, title: 'Comprar leite', completed: false }
        const onCompleteTask = jest.fn()
        const onDeleteTask = jest.fn()

        const { getByTestId } = render(
            <TaskItem
                index={0}
                task={task}
                onCompleteTask={onCompleteTask}
                onDeleteTask={onDeleteTask}
            />
        );

        fireEvent.press(getByTestId('complete_task_button_0'));
        expect(onCompleteTask).toHaveBeenCalledWith(task);
    });
});