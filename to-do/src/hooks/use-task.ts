import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TasksState, type Tasks } from "../models/tasks";


export default function useTask() {
    const [task, setTask] = useLocalStorage<Tasks[]>(TASKS_KEY, [])

    function prepareTask() {

        setTask([...task,
        {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TasksState.Creating
        }])
    }
    return{
        prepareTask
    }
}