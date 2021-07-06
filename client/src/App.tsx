import { FC } from 'react';
import './App.css';
import Filter from './components/filter/Filter';
import Navbar from './components/navbar/Navbar';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Filter/>
    </div>
  );
}

export default App;
