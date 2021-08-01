import axios from "axios";
import { useState, useEffect } from "react";

const Lands = () => {
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
    <div>
      {lands.map((land, id) => (
        <div key={id}>
          <code>{JSON.stringify(land)}</code>
        </div>
      ))}
    </div>
  );
};

export default Lands;
