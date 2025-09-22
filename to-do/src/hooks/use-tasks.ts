import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Tasks } from "../models/tasks";


export default function useTasks() {
    const [tasks] = useLocalStorage<Tasks[]>(TASKS_KEY, []);

    return {
        tasks,
        tasksCount: tasks.length,
        concluidedTasksCount: tasks.filter((task) => task.concluided).length
    }
}