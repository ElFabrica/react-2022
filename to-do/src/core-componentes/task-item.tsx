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
import { TasksState, type Tasks } from "../models/tasks";
import { cx } from "class-variance-authority";

interface TaskItemsProps{
    task: Tasks
}

export default function TaskItem({task}:TaskItemsProps) {

    const [isEditing, setIsEditing] = React.useState(task?.state == TasksState.Creating)
    const [taskTitle, setTaskTitle] = useState("")
    function handleEditTask() {
        setIsEditing(true)
    }
    function handleExitEditTask() {
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || "")
    }
    function handleSaveTask(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log({id:task.id, title:taskTitle})
        //Chamada para a função de atualizar;
        setIsEditing(false)
    }

    return (
        
        <Card size="md" >
            {!isEditing ?
                <div className="flex items-center gap-4">
                    <InputCheckbox value={task?.concluided?.toString()} checked={task?.concluided} />
                    <Text className={cx("flex-1", {
                        "line-through": task?.concluided
                    })}>
                        
                        {task?.title}</Text>
                    <div className="flex gap-1 ">
                        <ButtonIcon icon={TrashIcon} variant="tertiary" />
                        <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask} />
                    </div>
                </div>
                :
                <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                    <InputText className="flex-1"  onChange={handleChangeTaskTitle} required autoFocus/>
                    <div className="flex gap-1 ">
                        <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditTask} type="button" />
                        <ButtonIcon icon={CheckIcon} variant="primary" type="submit" />
                    </div>
                </form>}
        </Card>
                  
    )
}
