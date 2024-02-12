# DynamicCalender

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

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

Full calender with events
1. install these packages
npm install @fullcalendar/angular 
npm install @fullcalendar/daygrid
npm install @fullcalendar/interaction

2. we need to  import the required Modules into AppModule. 
FullCalendarModule

3. put the html tag
 <full-calendar [options]="calendarOptions"></full-calendar>


 Draggable Gridster in Angular using angular-gridster2
 1. install 
 npm install angular-gridster2 --save

 2. import reuquired module in root moduke
 GridsterModule 

 3. in the html template
  add the <gridster> and  <gridster-item> 

  4.  add the options and methods required for the gridstere to populate grid sections and handle actions buttons in the ts file