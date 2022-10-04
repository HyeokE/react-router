import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className={'flex items-center justify-center gap-10'}>
        <img src="/vite.svg" className="animate-bounce h-32	" alt="Vite logo" />
        <img src={reactLogo} className="animate-bounce h-32" alt="React logo" />
      </div>
      <div className={'flex flex-col items-center justify-center w-fit gap-6'}>
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
