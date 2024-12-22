import { Component } from '@angular/core';
import { TODO_STATUS } from '../../app-shared/constants/todo.constants';
import { ITodo } from '../../app-shared/models/todo.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_ROUTER_UTILS } from '../../app-shared/utils/app-router.util';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss'],
  standalone: false,
})
export class ProcessingComponent {
  readonly APP_ROUTER_UTILS = APP_ROUTER_UTILS;
  SEARCH_FORMS = {
    keyword: 'keyword',
  };

  form: FormGroup;
  searchResults: ITodo[] = [];

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      [this.SEARCH_FORMS.keyword]: [''],
    });
  }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(): void {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    this.searchResults = todos;
    const keyword =
      this.form?.get(this.SEARCH_FORMS.keyword)?.value?.trim().toLowerCase() ||
      '';
    const tokens = keyword.split(' ').filter((token: string) => token);

    this.searchResults = todos.filter((todo) => {
      const code = todo.code?.toLowerCase() || '';
      const title = todo.title?.toLowerCase() || '';
      return tokens.every(
        (token: string) => code.includes(token) || title.includes(token)
      );
    });
    this.searchResults = this.searchResults.filter(
      (item) => item.status === TODO_STATUS.PROCESSING
    );
  }

  changeStatus(code?: string): void {
    if (!code) {
      return;
    }
    let todos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    todos = todos.map((item) => {
      if (code === item.code) {
        return { ...item, status: TODO_STATUS.COMPLETE };
      }
      return item;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    this.onSearch();
  }
}
