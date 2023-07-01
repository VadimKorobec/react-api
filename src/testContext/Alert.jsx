import { useContext } from 'react';
import { Context } from './App';

export const Alert = () => {
  const context = useContext(Context);

  return (
    context.toggleValue && <div className="alert alert-danger">Message</div>
  );
};
