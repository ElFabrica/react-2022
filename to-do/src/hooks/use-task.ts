import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TasksState, type Task } from "../models/tasks";


export default function useTask() {
    const [task, setTask] = useLocalStorage<Task[]>(TASKS_KEY, [])

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

    function updateTaskStatus(id: string, concluided: boolean){
        setTask(
            task.map((task) => task.id ===id ? {...task, concluided} : task)
        )
    }
    function deletTask(id: string){
        setTask(task.filter((task) => task.id !== id ))
    }
    
    return{
        prepareTask,
        updateTask,
        updateTaskStatus,
        deletTask
    }
}