import Container from "../components/Container";
import TaskList from "../core-componentes/task-list";
import TasksSummary from "../core-componentes/tasks-summary";

export default function PageHome() {
    return (
        <Container as="article" className="space-y-3">
            <header className="flex items-center justify-between">
                <TasksSummary />
            </header>
            <TaskList />
        </Container>
    )
}