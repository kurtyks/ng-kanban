Projekt zaliczeniowy 15332

Zastosowane technilogie: 
  angular
  angular-cli
  rxjs
  tailwindcss
  angular-material 
  firebase: Auth, FireStore 
  
Koncepcja funkcjonalności:
  podgląd statusu realizacji poszczególnych zadań 
  zmiana statusu zadań poprzez DragAndDrop
  Dodawanie nowych zadań
  Logowanie za pomocą google 
  
KNOWN BUGS: 
  Da się zalogować za pomocą providera google, ale nie daje to, żadnego rezultatu poza nazwą i zdjęciem (niekompletny firestore)
  Po przeniesieniu elementu nie aktualizujemy pola currentStatus tego elementu, mimo, że powinien się zmienić 
  
 TO DO: 
  fix main bugs 
  create responsive menu
  


# NgKanban

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
