import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { LanguageContext } from '../../contexts/languageContext'
import { Languages } from '@/src/infrastructure/constants/texts'

interface EmptyStateProps {
    text: Languages
}

export default function EmptyState({ text }: EmptyStateProps) {
    const { language } = useContext(LanguageContext)
    const formattedText = text[language]

    return (
        <View style={styles.container}>
            <Text>{formattedText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})