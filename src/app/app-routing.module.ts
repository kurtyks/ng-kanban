import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: BoardComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
