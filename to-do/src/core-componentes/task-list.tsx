import Button from "../components/Button";
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TasksState, type Task } from "../models/tasks";

export default function TaskList() {

    const { tasks, isLoadingTasks } = useTasks()
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
                    disabled={tasks.some((task) => task.state === TasksState.Creating) || isLoadingTasks}
                    >Nova Tarefa
                    </Button>
            </section>
            <section className="space-y-2">
                {!isLoadingTasks &&
                tasks.map((task) => <TaskItem key={task.id} task={task} />)}

                {
                    isLoadingTasks &&<>
                    <TaskItem loading task={{} as Task}/>
                    <TaskItem loading task={{} as Task}/>
                    <TaskItem loading task={{} as Task}/>
                    </>
                }
            </section>
        </>
    )
}