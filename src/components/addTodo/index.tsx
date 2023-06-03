import React from 'react';

import { AddTodoProps } from '@interfaces/props/addTodoProps';

export const AddTodo: React.FC<AddTodoProps> = ({
  handleAddTodo,
  handleInputTextChange,
  inputText,
}): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleAddTodo(inputText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex">
        <input
          id="input-todo"
          type="text"
          className="form-control me-2"
          placeholder="Add a Task"
          value={inputText}
          onChange={handleInputTextChange}
          required
          minLength={3}
          maxLength={75}
        />
        <button
          className="btn btn-primary"
          type="submit"
          id="button-add"
          title="Submit a Task"
        >
          Add
        </button>
      </div>
    </form>
  );
};
