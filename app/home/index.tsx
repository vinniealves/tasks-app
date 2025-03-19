import HomeTemplate from "@/src/presentation/components/templates/HomeTemplate";
import { useTasksContext } from "@/src/presentation/contexts/tasksContext";
import { useFocusEffect, useNavigation } from "expo-router";
import React, { useCallback, useContext } from "react";

export default function HomeScreen() {
  const { getTasks } = useTasksContext()

  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      getTasks()
    }, [navigation])
  )

  return <HomeTemplate />
}