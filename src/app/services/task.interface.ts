import { TaskState } from "./task-state.enum";

export interface ITask{
    taskName: string,
    taskContent: string, 
    currentState: TaskState
}