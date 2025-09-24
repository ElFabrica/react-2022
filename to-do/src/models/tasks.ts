export const TASKS_KEY = 'tasks'

export enum TasksState {
    Creating = 'creating',
    Created = 'created'
}


export interface Task {
    id: string;
    title: string;
    concluided?: boolean;
    state?: TasksState
}