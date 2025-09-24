import Button from "../components/Button";
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TasksState } from "../models/tasks";

export default function TaskList() {

    const { tasks } = useTasks()
    const { prepareTask } = useTask()
    console.log(tasks)

    function handleNewTask() {
        prepareTask()
    }

    return (
        <>
            <section>
                <Button onClick={handleNewTask}
                    className="w-full" 
                    icon={PlusIcon}
                    disabled={tasks.some((task) => task.state === TasksState.Creating)}
                    >Nova Tarefa
                    </Button>
            </section>
            <section className="space-y-2">
                {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
            </section>
        </>
    )
}