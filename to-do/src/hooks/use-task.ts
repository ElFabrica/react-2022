import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TasksState, type Task } from "../models/tasks";
import { delay } from "../helpers/utils";
import { useState } from "react";


export default function useTask() {
    const [task, setTask] = useLocalStorage<Task[]>(TASKS_KEY, [])
    const [isUpdatingTask, setIsUpdatingTask] = useState(false)
    const [isDeletingTask, setIsDeletingTask] = useState(false)

    function prepareTask() {

        setTask([...task,
        {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TasksState.Creating
        }])
    }

    function updateTask(id: string, payload: {title: Task["title"]}){
        setTask(
            task.map((task)=> task.id === id ? {
                ...task, state: TasksState.Created, ...payload}: task)
        )
    }

    async function updateTaskStatus(id: string, concluided: boolean){
        setIsUpdatingTask(true)
        await delay(1000);
        setTask(
            task.map((task) => task.id ===id ? {...task, concluided} : task)
        )
        setIsUpdatingTask(false)

    }
    function deletTask(id: string){
        setTask(task.filter((task) => task.id !== id ))
    }
    
    return{
        prepareTask,
        updateTask,
        updateTaskStatus,
        deletTask,
        isUpdatingTask
    }
}