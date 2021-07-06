import { FC } from 'react';
import './App.css';
import RegistrationForm from './components/register/RegistrationForm';

const App: FC = () => {
  let test: string = "Hello World";
  return (
    <div className="App">
      {test}
      <RegistrationForm/>
    </div>
  );
}

export default App;
