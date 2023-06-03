export interface AddTodoProps {
  handleAddTodo: (title: string) => void;
  handleInputTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
}
