import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTER_UTILS } from '../../app-shared/utils/app-router.util';
import { ITodo, ITodoCreate } from '../../app-shared/models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TODO_STATUS } from '../../app-shared/constants/todo.constants';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: false,
})
export class TodoItemComponent {
  FORM_FIELDS = {
    code: 'code',
    title: 'title',
    description: 'description',
    content: 'content',
    status: 'status',
  };

  form?: FormGroup;
  domainData?: ITodo;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm(this.domainData);
  }

  initForm(domainData?: ITodo) {
    this.form = this.fb.group({
      [this.FORM_FIELDS.code]: [domainData?.code || '', [Validators.required]],
      [this.FORM_FIELDS.title]: [
        domainData?.title || '',
        [Validators.required],
      ],
      [this.FORM_FIELDS.description]: [
        domainData?.description || '',
        [Validators.required],
      ],
      [this.FORM_FIELDS.content]: [
        domainData?.content || '',
        [Validators.required],
      ],
      [this.FORM_FIELDS.status]: [
        domainData?.status || '',
        [Validators.required],
      ],
    });
  }

  submit() {
    const request = this.createDomainReqeust();
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push(request);
    localStorage.setItem('todos', JSON.stringify(todos));

    this.router.navigate([APP_ROUTER_UTILS.todo.all]).then();
  }

  createDomainReqeust(): ITodoCreate {
    return {
      code: this.form?.get(this.FORM_FIELDS.code)?.value,
      title: this.form?.get(this.FORM_FIELDS.title)?.value,
      description: this.form?.get(this.FORM_FIELDS.description)?.value,
      content: this.form?.get(this.FORM_FIELDS.content)?.value,
      status: TODO_STATUS.PLANNING
    };
  }
}
