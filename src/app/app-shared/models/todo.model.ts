import { TODO_STATUS } from "../constants/todo.constants";

export interface ITodo {
  code?: string,
  title?: string;
  description?: string;
  content?: string;
  status?: TODO_STATUS;
}

export interface ITodoCreate {
  code?: string,
  title?: string;
  description?: string;
  content?: string;
  status?: TODO_STATUS;
}
