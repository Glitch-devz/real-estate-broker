import { useState, useEffect, useCallback } from "react";
import AddLand from "./AddLand";
import Lands from "./Lands";
import { RouteComponentProps } from "@reach/router";
import axios from "axios";

const Dashboard = (props: RouteComponentProps) => {
  const [lands, setLands] = useState([]);
  const getLands = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_ADDRESS}/admin/lands`
      );
      setLands(data.lands);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  useEffect(() => {
    getLands();
  }, [getLands]);
  return (
    <div>
      <AddLand getLands={() => getLands()} />
      <Lands lands={lands} getLands={() => getLands()} />
    </div>
  );
};

export default Dashboard;
