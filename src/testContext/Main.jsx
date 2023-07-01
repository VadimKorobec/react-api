import { useContext } from 'react';
import { Context } from './App';

export const Main = () => {
  const context = useContext(Context);
  return (
    <div>
      <h1>Hello Context</h1>
      <button
        className="btn btn-success"
        onClick={() => context.toggle(!context.toggleValue)}
      >
        Open Alert
      </button>
    </div>
  );
};
