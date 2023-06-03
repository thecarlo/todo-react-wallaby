import React, { useState } from 'react';

import { AddTodo } from '@components/addTodo';

import './app.scss';

export const App: React.FC = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>('');

  const handleAddTodo = () => {
    console.log('added todo');
  };

  const handleInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputText(event.target.value);
  };

  return (
    <div className="container" id="main">
      <h1>Todo List</h1>

      <AddTodo
        handleAddTodo={handleAddTodo}
        handleInputTextChange={handleInputTextChange}
        inputText={inputText}
      />
    </div>
  );
};
