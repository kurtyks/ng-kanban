import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BoardComponent } from './components/board/board.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, useDeviceLanguage } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { MatInputModule } from '@angular/material/input';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TaskComponent,
    TaskListComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    AngularFireAuthModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth()
      useDeviceLanguage(auth)
      return auth
    }),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
