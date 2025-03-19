import { TEXTS } from '@/src/infrastructure/constants';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useTasksContext } from '../../contexts/tasksContext';
import EmptyState from '../molecules/EmptyState';
import TaskItem from '../molecules/TaskItem';

const TaskList = () => {
    const { tasks, refreshing, refreshTasks, loading, onCompleteTask, onDeleteTask } = useTasksContext()

    return (
        <>
            {loading ?
                <ActivityIndicator style={{ flex: 1 }} />
                :
                <FlatList
                    contentContainerStyle={styles.container}
                    data={tasks}
                    refreshing={refreshing}
                    onRefresh={refreshTasks}
                    keyExtractor={({ id }) => String(id)}
                    renderItem={({ item, index }) => (
                        <TaskItem
                            index={index}
                            task={item}
                            onCompleteTask={(task) => onCompleteTask(task)}
                            onDeleteTask={(id) => onDeleteTask(id)}
                        />
                    )}
                    ListEmptyComponent={
                        <EmptyState text={TEXTS.HOME.EMPTY_STATE} />
                    }
                />
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    }
});

export default TaskList
