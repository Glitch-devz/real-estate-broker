import { FC, useEffect } from "react";
import LandCard from "./LandCard";
type Assets = {
  name: string;
  url: string;
  type: string;
};
type LandType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  price: number;
  address: string;
  assets: Array<Assets>;
};

interface LandsProps {
  lands: Array<LandType>;
  getLands: () => void;
}

const Lands: FC<LandsProps> = ({ lands, getLands }) => {
  useEffect(() => {
    getLands();
  }, []);
  return (
    <div style={{ margin: "30px" }}>
      {lands.map((land, id) => (
        <LandCard key={id} land={land} getLands={() => getLands()} />
      ))}
    </div>
  );
};

export default Lands;
