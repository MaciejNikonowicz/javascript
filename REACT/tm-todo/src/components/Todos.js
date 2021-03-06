import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => {
      return <TodoItem todo={todo} key={todo.id} />;
    });
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
