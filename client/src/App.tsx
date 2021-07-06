import { FC, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

const App: FC = () => {
  // const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      {/* <p>The Count is {count}</p>
      <button onClick={()=> setCount(count+1)}>Counter</button> */}
      <Navbar/>
    </div>
  );
}

export default App;
