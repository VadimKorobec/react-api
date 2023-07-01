import { useCustomContext } from '../testContext/Context/Context';

export const Alert = () => {
  const context = useCustomContext();

  return (
    context.toggleValue && <div className="alert alert-danger">Message</div>
  );
};
