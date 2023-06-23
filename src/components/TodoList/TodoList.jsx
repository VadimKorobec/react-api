import { Component } from 'react';
import todo from '../../todo.json';
import { TodoItem } from 'components/TodoItem/TodoItem';

export class TodoList extends Component {
  state = {
    todoList: todo,
  };

  handleCheckCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(item => item.id === id)
        ? { ...todo, completed: !todo.completed }
        : todo,
    }));
  };

  render() {
    return (
      <>
        <h1>My Todo List</h1>
        <ul>
          {this.state.todoList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
            />
          ))}
        </ul>
      </>
    );
  }
}
