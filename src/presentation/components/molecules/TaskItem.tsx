import { Task } from '@/src/domain/models/Task';
import { FontAwesome6 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface TaskItemProps {
    index: number;
    task: Task,
    onCompleteTask: (task: Task) => void,
    onDeleteTask: (id: number) => void,
}

const TaskItem = ({ task, index, onCompleteTask, onDeleteTask }: TaskItemProps) => {
    const router = useRouter()

    const handleUpdateTask = () => {
        router.navigate({
            pathname: '/add-task',
            params: {
                task: JSON.stringify(task)
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task.title}</Text>
            <View style={styles.actionsContainer}>
                {
                    !task.completed &&
                    <Pressable style={styles.icon} onPress={handleUpdateTask}>
                        <FontAwesome6 name={'edit'} solid size={16} />
                    </Pressable>
                }
                <Pressable style={styles.icon} onPress={() => onDeleteTask(task.id)}>
                    <FontAwesome6 name={'trash-can'} solid size={16} />
                </Pressable>
                {
                    task.completed ?
                        <FontAwesome6 style={styles.icon} name={'check-circle'} solid size={16} color={'green'} testID={`completed_task_icon_${index}`} />
                        :
                        <Pressable style={styles.icon} onPress={() => onCompleteTask(task)} testID={`complete_task_button_${index}`}>
                            <FontAwesome6 name={'circle'} size={16} />
                        </Pressable>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#ffff99',
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    actionsContainer: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 16,
    },
    icon: {
        paddingLeft: 10,
    }
})

export default TaskItem