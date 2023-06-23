import { Component } from 'react';
import todos from '../../todo.json';
import { TodoItem } from 'components/TodoItem/TodoItem';

export class TodoList extends Component {
  state = {
    todoList: todos,
  };

  handleCheckCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(item => item.id === id)
        ? { ...todos, completed: !todos.completed }
        : todos,
    }));
  };

  render() {
    return (
      <>
        <h1>My Todo List</h1>
        <ul>
          {this.state.todoList.map(item => (
            <TodoItem
              key={item.id}
              item={item}
              handleCheckCompleted={this.handleCheckCompleted}
            />
          ))}
        </ul>
      </>
    );
  }
}
