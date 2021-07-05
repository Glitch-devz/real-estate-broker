import { FC } from 'react';
import './App.css';

const App: FC = () => {
  let test: string = "Hello World";
  return (
    <div className="App">
      {test}
    </div>
  );
}

export default App;
