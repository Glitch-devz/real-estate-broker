import { FC } from 'react';
import './App.css';
import { Button } from 'antd';
import { Link } from "@reach/router";

const App: FC = () => {
  let test: string = "Hello World";
  return (
    <div className="App">
      {test}
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
