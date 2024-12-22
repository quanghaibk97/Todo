import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTER_UTILS } from '../utils/app-router.util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: false,
})
export class MenuComponent {
  constructor(protected router: Router) {}

  addTodo() {
    this.router.navigate([APP_ROUTER_UTILS.todo.item]).then();
  }
}
