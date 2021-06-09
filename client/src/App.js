import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const fetchMessage = async () => {
    const response = await fetch("http://localhost:5000");
    const data = await response.json();
    setMessage(data.message);
  };
  useEffect(() => {
    fetchMessage();
  }, []);
  return <div>{message}</div>;
}

export default App;
