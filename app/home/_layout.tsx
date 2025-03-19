import { TEXTS } from "@/src/infrastructure/constants"
import { LanguageContext } from "@/src/presentation/contexts/languageContext"
import { Slot, useNavigation, useRouter } from "expo-router"
import { useContext, useLayoutEffect } from "react"
import { Pressable, Text } from "react-native"

const HomeRootLayout = () => {
    const router = useRouter()
    const navigation = useNavigation()
    const { language } = useContext(LanguageContext)

    const onAddTask = () => {
        router.navigate("/add-task")
    }

    const onLogin = () => {
        router.navigate("/login")
    }

    useLayoutEffect(() => {
        if (navigation) {
            navigation.setOptions({
                headerLeft: LoginButton,
                headerRight: AddTaskButton
            })
        }
    }, [navigation])

    const AddTaskButton = () => (
        <Pressable onPress={onAddTask} testID="add_task_button">
            <Text>{TEXTS.HOME.ADD_BUTTON[language]}</Text>
        </Pressable>
    )

    const LoginButton = () => (
        <Pressable onPress={onLogin} testID="login_button">
            <Text>{TEXTS.HOME.LOGIN_BUTTON[language]}</Text>
        </Pressable>
    )

    return <Slot />
}

export default HomeRootLayout