import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  TodosList.propTypes = {
    handleChangeProps: PropTypes.string.isRequired,
    deleteTodoProps: PropTypes.string.isRequired,
    setUpdate: PropTypes.string.isRequired,
    todos: PropTypes.string.isRequired,
  };
  const {
    todos, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
