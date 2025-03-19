import { TEXTS } from "@/src/infrastructure/constants";
import { LanguageContext, LanguageProvider } from "@/src/presentation/contexts/languageContext";
import { TasksProvider } from "@/src/presentation/contexts/tasksContext";
import { persistor, store } from "@/src/infrastructure/state/store";
import { Stack } from "expo-router";
import { useContext } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider>
          <TasksProvider>
            <Main />
          </TasksProvider>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  )
}

const Main = () => {
  const { language } = useContext(LanguageContext)

  return (
    <Stack initialRouteName="home" >
      <Stack.Screen name="home" options={{ title: TEXTS.HOME.TITLE[language] }} />
      <Stack.Screen name="add-task" options={{
        presentation: "modal",
        title: TEXTS.ADD_TASK.TITLE[language]
      }} />
      <Stack.Screen name="login" options={{ title: TEXTS.LOGIN.TITLE[language] }} />
    </Stack>
  )
}