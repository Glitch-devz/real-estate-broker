import { FC, useState } from "react";
import { Card, Button } from "antd";
import AddAsset from "./AddAsset";

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
  land: LandType;
  getLands: () => void;
}

const tabList = [
  {
    key: "Information",
    tab: "Information",
  },
  {
    key: "Media",
    tab: "Media",
  },
  {
    key: "Documents",
    tab: "Documents",
  },
];

const LandCard: FC<LandsProps> = ({ land, getLands }) => {
  const [key, setKey] = useState(tabList[0].key);
  const onTabChange = (key: string) => {
    setKey(key);
  };
  const contentList = {
    tab1: <code>{JSON.stringify(land)}</code>,
    tab2: <AddAsset landid={land._id} />,
    tab3: <p>No Documents for now</p>,
  };
  return (
    <Card
      style={{ margin: "30px" }}
      title={land.name}
      extra={<Button>Edit</Button>}
      tabList={tabList}
      activeTabKey={key}
      onTabChange={(key) => {
        onTabChange(key);
      }}
    >
      {key === "Information" && (
        <div style={{ padding: "20px", minHeight: "200px" }}>
          <Card.Meta title={"BDT " + land.price} description={land.address} />
          <p> </p>
          <p>Phone : {land.phone}</p>
          <p>Email : {land.email}</p>
          {land.assets.map((ls, id) => (
            <Button
              onClick={() =>
                window.open(
                  `${process.env.REACT_APP_SERVER_ADDRESS}` + ls.url,
                  "_blank"
                )
              }
            >
              Land Media {id + 1}
            </Button>
          ))}
        </div>
      )}
      {key === "Media" && (
        <div style={{ padding: "20px", minHeight: "200px" }}>
          <AddAsset landid={land._id} />
        </div>
      )}
      {key === "Documents" && (
        <div style={{ padding: "20px", minHeight: "200px" }}>
          <p>No Documents for now</p>
        </div>
      )}
    </Card>
  );
};

export default LandCard;
