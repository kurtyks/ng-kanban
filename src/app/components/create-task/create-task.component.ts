import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  // popupVisible?: boolean = this.tasksService.creationPopUpVisible; 
  taskName?: string; 
  taskDescription?: string; 

  closePopup(): void{
    this.dialogRef.close();
  }

  createTask(form: NgForm) {
    console.log("create TASK")

    console.log(form.value)
    if(form.valid){
      this.tasksService.createTask(form.value)
    }
    this.dialogRef.close();
  }


  constructor(
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<CreateTaskComponent>
  ){}
}
