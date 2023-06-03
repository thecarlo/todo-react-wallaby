import { AddTodo } from '@components/addTodo';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('AddTodo', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the AddTodo component', () => {
    const handleAddTodo = vi.fn();

    const handleInputTextChange = vi.fn();

    render(
      <AddTodo
        handleAddTodo={handleAddTodo}
        handleInputTextChange={handleInputTextChange}
        inputText=""
      />,
    );

    const inputElement = screen.getByPlaceholderText('Add a Task');

    expect(inputElement).toBeInTheDocument();

    const addButton = screen.getByText('Add');

    expect(addButton).toBeInTheDocument();
  });

  it('should call handleInputTextChange when input is changed', () => {
    const handleAddTodo = vi.fn();

    const handleInputTextChange = vi.fn();

    render(
      <AddTodo
        handleAddTodo={handleAddTodo}
        handleInputTextChange={handleInputTextChange}
        inputText=""
      />,
    );

    const inputElement = screen.getByPlaceholderText('Add a Task');

    fireEvent.change(inputElement, { target: { value: 'New task' } });

    expect(handleInputTextChange).toHaveBeenCalledTimes(1);
  });

  it('should call handleAddTodo when form is submitted', () => {
    const handleAddTodo = vi.fn();

    const handleInputTextChange = vi.fn();

    const { container } = render(
      <AddTodo
        handleAddTodo={handleAddTodo}
        handleInputTextChange={handleInputTextChange}
        inputText="New task"
      />,
    );

    const formElement = container.querySelector('form');

    if (formElement) {
      fireEvent.submit(formElement);
    }

    expect(handleAddTodo).toHaveBeenCalledTimes(1);

    expect(handleAddTodo).toHaveBeenCalledWith('New task');
  });
});
