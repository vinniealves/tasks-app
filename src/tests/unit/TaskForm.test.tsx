import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Task } from '@/src/domain/models/Task';
import TaskForm from '@/src/presentation/components/organisms/TaskForm';

describe('TaskForm', () => {
    it('deve adicionar uma nova tarefa ao clicar em Salvar', () => {
        const onSubmitForm = jest.fn()
        const { getByTestId } = render(
            <TaskForm onSubmitForm={onSubmitForm} />
        );

        fireEvent.changeText(getByTestId('task_title_input'), 'Comprar leite');
        fireEvent.press(getByTestId('save-task-button'));

        expect(onSubmitForm).toHaveBeenCalledWith({
            title: 'Comprar leite',
            completed: false
        });
    });
});

describe('TaskForm', () => {
    it('deve editar uma tarefa ao clicar em Salvar', () => {
        const onSubmitForm = jest.fn()
        const task: Task = {
            id: 5,
            title: 'Um titulo qualquer',
            completed: false
        }
        const { getByTestId } = render(
            <TaskForm task={task} onSubmitForm={onSubmitForm} />
        );

        fireEvent.changeText(getByTestId('task_title_input'), 'Comprar leite');
        fireEvent.press(getByTestId('save-task-button'));

        expect(onSubmitForm).toHaveBeenCalledWith(
            {
                id: 5,
                title: 'Comprar leite',
                completed: false
            });
    });
});