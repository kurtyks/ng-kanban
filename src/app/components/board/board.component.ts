import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskState } from 'src/app/services/task-state.enum';
import { ITask } from 'src/app/services/task.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  todoTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  doneTasks: ITask[] = [];
  canceledTasks: ITask[] = [];

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
    this.tasksService.exampleTasks$.subscribe(
      (res)=>{
        console.log(res)
        this.todoTasks = res.filter(task => task.currentState == TaskState.TO_DO);
        this.inProgressTasks = res.filter(task => task.currentState == TaskState.IN_PROGRESS);
        this.doneTasks = res.filter(task => task.currentState == TaskState.DONE);
        this.canceledTasks = res.filter(task => task.currentState == TaskState.CANCELED);
      }
      )
   
  }

  constructor(
    private tasksService: TasksService
  ) { }

}