import Badge from "../components/Badge";
import Text from "../components/Text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {

    const {createdTasksCount, councluidedTasksCount, isLoadingTasks} = useTasks()

    return (
        <>
            <div className="flex items-center gap-2">
                <Text className="!text-gray-300" variant="body-sm-bold">
                    Tarefas criadas
                </Text>
                <Badge 
                variant="secondary" 
                loading={isLoadingTasks}
                >
                    {createdTasksCount}
                </Badge>
            </div>

            <div className="flex items-center gap-2">
                <Text className="!text-gray-300" variant="body-sm-bold">
                    Concluídas
                </Text>
                <Badge variant="primary" 
                loading={isLoadingTasks}>
                    {councluidedTasksCount} de {createdTasksCount}
                </Badge>
            </div>
        </>
    );
}