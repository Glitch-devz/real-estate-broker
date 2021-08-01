import { FC } from "react";
import AddLand from "./AddLand";
import Lands from "./Lands";

const Dashboard: FC = () => {
  return (
    <div>
      <AddLand />
      <Lands />
    </div>
  );
};

export default Dashboard;
