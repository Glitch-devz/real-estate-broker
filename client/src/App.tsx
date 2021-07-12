import { FC } from 'react';
import './App.css';
import Adbox from './components/adBox/Adbox';
import Filter from './components/filter/Filter';
import Navbar from './components/navbar/Navbar';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Filter/>
      <Adbox/>
    </div>
  );
}

export default App;
