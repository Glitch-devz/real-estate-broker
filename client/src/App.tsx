import { FC, useState, useEffect } from "react";
import Adbox from "./components/adBox/Adbox";
import Filter from "./components/filter/Filter";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
import "./App.css";
// import Dashboard from "./components/admin/Dashboard";

const App: FC = () => {
  const [lands, setLands] = useState([]);
  const getLands = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_ADDRESS}/admin/lands`
      );
      setLands(data.lands);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getLands();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Filter />
      {lands.map((land, id) => (
        <Adbox key={id} land={land} />
      ))}
      {/* <Dashboard /> */}
    </div>
  );
};

export default App;
