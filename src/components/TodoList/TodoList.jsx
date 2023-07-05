import { FormToDo } from 'components/FormToDo/FormToDo';
import { TodoItem } from 'components/TodoItem/TodoItem';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { FormFilterTodo } from 'components/FormToDo/FormFilterTodo';
import { useSearchParams } from 'react-router-dom';

export const TodoList = () => {
  const [todoList, setTodoList] = useState('');
  const [filterTodoList, setFilterTodoList] = useState(todoList);
  const [searchParams, setSearchParams] = useSearchParams('');

  const filterText = searchParams.get('filter') ?? '';

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    todoList &&
      setFilterTodoList(
        todoList?.filter(todo =>
          todo.title.toLowerCase().includes(filterText.trim().toLowerCase())
        )
      );
  }, [filterText, todoList]);

  const handleCheckCompleted = id => {
    setTodoList(prevState => {
      return prevState.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = id => {
    setTodoList(prevState => {
      return prevState.filter(todo => todo.id !== id);
    });
    toast.error('Delete succssesfuly');
  };

  const addToDo = value => {
    setTodoList(prevState => {
      return [...prevState, { id: nanoid(), title: value, completed: false }];
    });
    toast.success('Create successfully');
  };

  return (
    <>
      <h1>My Todo List</h1>
      <FormFilterTodo
        setSearchParams={setSearchParams}
        filterText={filterText}
      />
      <FormToDo addToDo={addToDo} />
      {filterTodoList && (
        <ul>
          {filterTodoList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

// import { Component } from 'react';
// // import todo from '../../todo.json';
// import { TodoItem } from 'components/TodoItem/TodoItem';
// import { FormToDo } from 'components/FormToDo/FormToDo';
// import { nanoid } from 'nanoid';

// export class TodoList extends Component {
//   state = {
//     todoList: '',
//     isDelete: false,
//     isCreate: false,
//   };

//   componentDidMount() {
//     if (localStorage.getItem('todo'))
//       this.setState({ todoList: JSON.parse(localStorage.getItem('todo')) });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todoList.length !== this.state.todoList.length) {
//       console.log('Edit todo list');
//     }
//     if (prevState.todoList.length > this.state.todoList.length) {
//       localStorage.setItem('todo', JSON.stringify(this.state.todoList));
//       this.setState({ isDelete: true });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 1500);
//     }
//     if (prevState.todoList.length < this.state.todoList.length) {
//       localStorage.setItem('todo', JSON.stringify(this.state.todoList));
//       this.setState({ isCreate: true });
//       setTimeout(() => {
//         this.setState({ isCreate: false });
//       }, 1500);
//     }
//   }

//   handleCheckCompleted = id => {
//     this.setState(prevState => ({
//       todoList: prevState.todoList.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   handleDelete = id => {
//     this.setState(prevState => ({
//       todoList: prevState.todoList.filter(todo => todo.id !== id),
//     }));
//   };

//   addToDo = value => {
//     this.setState(prevState => ({
//       todoList: [
//         ...prevState.todoList,
//         { id: nanoid(), title: value, completed: false },
//       ],
//     }));
//   };

//   render() {
//     const { isDelete, isCreate } = this.state;

//     return (
//       <>
//         <h1>My Todo List</h1>
//         {isDelete && (
//           <div className="alert alert-danger" role="alert">
//             ToDo delete successfully!
//           </div>
//         )}
//         {isCreate && (
//           <div className="alert alert-success" role="alert">
//             Create ToDo successfully!
//           </div>
//         )}
//         <FormToDo addToDo={this.addToDo} />
//         {this.state.todoList && (
//           <ul>
//             {this.state.todoList.map(todo => (
//               <TodoItem
//                 key={todo.id}
//                 todo={todo}
//                 handleCheckCompleted={this.handleCheckCompleted}
//                 handleDelete={this.handleDelete}
//               />
//             ))}
//           </ul>
//         )}
//       </>
//     );
//   }
// }
