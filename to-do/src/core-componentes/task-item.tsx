import React, { useState, type ChangeEvent } from "react";
import ButtonIcon from "../components/Button-icon";
import Card from "../components/Card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/Text";
import TrashIcon from "../assets/icons/trash.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import XIcon from "../assets/icons/x.svg?react"
import CheckIcon from "../assets/icons/check.svg?react"
import InputText from "../components/Input-text";
import { TasksState, type Task } from "../models/tasks";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/Skeleton";

interface TaskItemsProps{
    task: Task,
    loading?: boolean
}

export default function TaskItem({task, loading}:TaskItemsProps) {

    const { updateTask, updateTaskStatus, deletTask, isUpdatingTask, isDeletingTask } = useTask()

    const [isEditing, setIsEditing] = React.useState(task?.state == TasksState.Creating)
    const [taskTitle, setTaskTitle] = useState(task.title || "")
    function handleEditTask() {
        setIsEditing(true)
    }
    function handleExitEditTask() {
        if(task.state === TasksState.Creating){
            deletTask(task.id)
        }
        setIsEditing(false)
        
    }

    function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || "")
    }
    async function handleSaveTask(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log({id:task.id, title:taskTitle})
        await updateTask(task.id, {title: taskTitle})
        setIsEditing(false)
    }

    function handleChenageTaskStatus(e: React.ChangeEvent<HTMLInputElement>){
        const checked = e.target.checked
        updateTaskStatus(task.id, checked)
        console.log(checked)
    }

    async function handleDeleteTask(){
        await deletTask(task.id)
    }

    return (
        
        <Card size="md" >
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <InputCheckbox
                    loading={loading}
                    checked={task?.concluided} 
                    onChange={handleChenageTaskStatus}
                    />
                     {!loading ? <Text 
                        className={cx("flex-1", {
                        "line-through": task?.concluided
                    })}>
                        
                        {task?.title}</Text>
                    :
                    <Skeleton className="h-6 flex-1"/>    
                    }  
                    
                    <div className="flex gap-1 ">
                        <ButtonIcon 
                        icon={TrashIcon} 
                        variant="tertiary" 
                        onClick={handleDeleteTask}
                        loading={loading}
                        handling={isDeletingTask}


                        />
                        <ButtonIcon 
                        icon={PencilIcon} 
                        variant="tertiary" 
                        onClick={handleEditTask} 
                        loading={loading}
                        
                        />
                    </div>
                </div>
                ):
                <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                    <InputText className="flex-1"
                    onChange={handleChangeTaskTitle} 
                    required 
                    autoFocus
                    value={taskTitle}

                    />
                    <div className="flex gap-1 ">
                        <ButtonIcon 
                        icon={XIcon} 
                        variant="secondary" 
                        onClick={handleExitEditTask} 
                        type="button" 
                        />
                        <ButtonIcon 
                        icon={CheckIcon} 
                        variant="primary"
                        type="submit" 
                       handling={isUpdatingTask}

                         />
                    </div>
                </form>}
        </Card>
                  
    )
}
