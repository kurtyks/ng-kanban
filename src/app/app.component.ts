import { Component, inject } from '@angular/core';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';

import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { signInWithPopup } from 'firebase/auth';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-kanban';
  loggedIn: boolean = false;
  userProfile: any = null;
  isMobileMenuOpen: boolean = false;
  createTask() {
    const dialogRef = this.dialog.open(CreateTaskComponent);
  }

  googleSignIn() {
    signInWithPopup(this.auth, new GoogleAuthProvider)
      .then(
        (res) => {
          this.userProfile = res.user;
          console.log(this.userProfile)
        },
        (err) => { console.log(err) })

  }
  logOut() {
    this.auth.signOut()
      .then(() => {
        this.userProfile = null;
      })
      .catch(error => {
        // Error during logout
      });
  }

  constructor(
    private dialog: MatDialog,
    private auth: Auth,
    private tasksService: TasksService
  ) { }
}
