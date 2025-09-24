import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TasksState, type Task } from "../models/tasks";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";


export default function useTasks() {
    const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [tasks, setTasks] = useState<Task[]>([])
    const [isLoadingTasks, setIsLoadingTasks] = useState(true)

    async function fetchTasks(){
        if(isLoadingTasks){
            await delay(2000);
            setIsLoadingTasks(false)

        }
        setTasks(tasksData)
    }

    useEffect(() =>{
        fetchTasks()
    }, [tasksData])

    return {
        tasks,
        createdTasksCount: tasks.filter((tasks) => tasks.state === TasksState.Created).length,
        councluidedTasksCount: tasks.filter((task) => task.concluided).length,
        isLoadingTasks
    }
}