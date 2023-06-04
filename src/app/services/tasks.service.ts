import { Injectable, OnInit } from '@angular/core';
import { ITask } from './task.interface';
import { TaskState } from './task-state.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit{

  // creationPopUpVisible: boolean = false;

  private taskSubjects: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([]);
  public exampleTasks$: Observable<ITask[]> = this.taskSubjects.asObservable();

  createTask(task: {taskName: string, taskContent: string}){
    this.exampleTasks.push({...task, currentState: TaskState.TO_DO})
    console.log(this.exampleTasks)
    this.taskSubjects.next(this.exampleTasks)
  }

  exampleTasks: ITask[] = [
    {
      taskName: "Dodać resztę firebase",
      taskContent: "Auth działa, jeszcze dokumenty usera",
      currentState: TaskState.IN_PROGRESS
    },
    {
      taskName: "Zrobić zakupy",
      taskContent: "Kupić jakieś żarełko",
      currentState: TaskState.TO_DO
    },
    {
      taskName: "Odłożyć cebuliony 🧅",
      taskContent: "Tak",
      currentState: TaskState.TO_DO
    },
    {
      taskName: "Nauczyć się PHPa",
      taskContent: "Niestety",
      currentState: TaskState.IN_PROGRESS
    },
    {
      taskName: "Zaliczyć sesję",
      taskContent: "Nie wiem jakim niby cudem",
      currentState: TaskState.CANCELED
    },
    {
      taskName: "Wyspać się jak człowiek",
      taskContent: "...",
      currentState: TaskState.CANCELED
    },
    {
      taskName: "Zrobić 8 projektów",
      taskContent: "...",
      currentState: TaskState.TO_DO
    },
    {
      taskName: "Autoryzacja GOOGLE",
      taskContent: "Dziala, ale do momentu implementacji reszty firestore jest bezużyteczna",
      currentState: TaskState.DONE
    },
    {
      taskName: "Interfejsy + enumy",
      taskContent: "...",
      currentState: TaskState.DONE
    },
    {
      taskName: "Dodawanie tasków",
      taskContent: "...",
      currentState: TaskState.DONE
    },
    {
      taskName: "Podawanie tasków jako Observables",
      taskContent: "...",
      currentState: TaskState.DONE
    },
    {
      taskName: "Resta routingów",
      taskContent: "Guardsy na podstawie googleAuth albo magic linka",
      currentState: TaskState.TO_DO
    },
    {
      taskName: "Posprzątanie śmieci",
      taskContent: "Pliki, serwisy, zbędne foldery. Ważne że działa",
      currentState: TaskState.TO_DO
    }
  ]

  private tasks: ITask[] = this.exampleTasks;


  constructor() { 
    this.taskSubjects.next(this.exampleTasks)
  }

  ngOnInit(): void {
  }
}
