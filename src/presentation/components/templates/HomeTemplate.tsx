import { useSession } from '@/src/infrastructure/state/storeHooks'
import React from 'react'
import { Text } from 'react-native'
import TaskList from '../organisms/TaskList'

const HomeTemplate = () => {
    const session = useSession()

    return (
        <>
            {
                session &&
                <Text>{session.name}</Text>
            }
            <TaskList />
        </>
    )
}

export default HomeTemplate