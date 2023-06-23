import { Component } from 'react';
import todoList from '../../todo.json';
import { TodoItem } from 'components/TodoItem/TodoItem';

export class TodoList extends Component {
  render() {
    return (
      <>
        <h1>My Todo List</h1>
        <ul>
          {todoList.map(item => (
            <TodoItem key={item.id} item={item} />
          ))}
        </ul>
      </>
    );
  }
}
