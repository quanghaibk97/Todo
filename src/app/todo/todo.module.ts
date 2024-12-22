import { TodoItemComponent } from './todo-item/todo-item.component';
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TodoRoutingModule } from "./todo-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AllComponent } from './all/all.component';
import { PlanningComponent } from './planning/planning.component';
import { ProcessingComponent } from './processing/processing.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    TodoItemComponent,
    AllComponent,
    PlanningComponent,
    ProcessingComponent,
    CompleteComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TodoModule {

}
