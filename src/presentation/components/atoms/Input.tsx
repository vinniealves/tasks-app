import { StyleSheet, TextInput, TextInputProps } from "react-native"

interface InputProps { }

const Input = (props: InputProps & TextInputProps) => {
    return (
        <TextInput
            {...props}
            style={[styles.container, props.style]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
    }
})

export default Input