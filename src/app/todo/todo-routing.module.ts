import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTER_UTILS } from '../app-shared/utils/app-router.util';
import { NgModule } from '@angular/core';
import { AllComponent } from './all/all.component';
import { PlanningComponent } from './planning/planning.component';
import { ProcessingComponent } from './processing/processing.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  {
    path: APP_ROUTER_UTILS.todo.all,
    component: AllComponent,
    data: {
      title: 'All'
    },
  },
  {
    path: APP_ROUTER_UTILS.todo.planning,
    component: PlanningComponent,
    data: {
      title: 'Planning'
    },
  },
  {
    path: APP_ROUTER_UTILS.todo.processing,
    component: ProcessingComponent,
    data: {
      title: 'Processing'
    },
  },
  {
    path: APP_ROUTER_UTILS.todo.complete,
    component: CompleteComponent,
    data: {
      title: 'Complete'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TodoRoutingModule {

}
