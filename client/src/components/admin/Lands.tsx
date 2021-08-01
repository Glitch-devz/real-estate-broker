import { FC, useEffect } from "react";
type Assets = {
  name: string;
  url: string;
  type: string;
};
type LandType = {
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
  }, [getLands]);
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
