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

    async function updateTask(id: string, payload: {title: Task["title"]}){
        setIsUpdatingTask(true)
        await delay(1000);
        setTask(
            task.map((task)=> task.id === id ? {
                ...task, state: TasksState.Created, ...payload}: task)
        )
        setIsUpdatingTask(false)

    }

     function updateTaskStatus(id: string, concluided: boolean){
        setTask(
            task.map((task) => task.id ===id ? {...task, concluided} : task)
        )

    }
    async function deletTask(id: string){
        setIsDeletingTask(true)
        await delay(1000);
        setTask(task.filter((task) => task.id !== id ))
        setIsDeletingTask(false)

    }
    
    return{
        prepareTask,
        updateTask,
        updateTaskStatus,
        deletTask,
        isUpdatingTask,
        isDeletingTask
    }
}