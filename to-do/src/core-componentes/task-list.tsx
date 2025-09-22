import Button from "../components/Button";
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

export default function TaskList() {

    const { tasks } = useTasks()
    const { prepareTask } = useTask()
    console.log(tasks)
    return (
        <>
            <section>
                <Button onClick={ }
                    className="w-full" icon={PlusIcon}>Nova Tarefa</Button>
            </section>
            <section className="space-y-2">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </section>
        </>
    )
}