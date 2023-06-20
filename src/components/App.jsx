import { useState } from 'react';

export const App = () => {
  const [ferst, second] = useState(false);
  console.log('ferst', ferst);
  console.log('second', second);
  return <div></div>;
};
