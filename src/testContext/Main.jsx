import { useCustomContext } from '../testContext/Context/Context';

export const Main = () => {
  const context = useCustomContext();
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
