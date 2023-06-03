import { Todo } from '@interfaces/todo';

export interface TodoListProps {
  todos: Todo[];
  handleOnToggle: (id?: string) => void;
  handleOnDelete: (id?: string) => void;
}
