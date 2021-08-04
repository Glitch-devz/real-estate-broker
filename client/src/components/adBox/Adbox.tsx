import { FC, useState } from "react";
import { Card, Image, Typography, Button } from "antd";
import { BiMap } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { ImDownload3 } from "react-icons/im";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

import styles from "./Adbox.module.css";
import "./Adbox.css";

const { Title } = Typography;
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

interface LandProps {
  land: LandType;
}
const serverurl = `${process.env.REACT_APP_SERVER_ADDRESS}`;
const Adbox: FC<LandProps> = ({ land }) => {
  const [mainImage, setMainImage] = useState(
    serverurl + land?.assets[0]?.url || ""
  );
  return (
    <Card>
      <div>
        <Image
          style={{ height: "300px", width: "400px", objectFit: "contain" }}
          src={mainImage}
        />
        <div
          style={{
            display: "flex",
            maxWidth: "400px",
            overflowX: "auto",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          {land.assets.map((asset, id) => (
            <img
              key={id}
              style={{ height: "60px", objectFit: "contain" }}
              src={serverurl + asset.url}
              alt={id.toString()}
              onClick={() => setMainImage(serverurl + asset.url)}
            />
          ))}
        </div>
      </div>
      <div className={styles.adInfo}>
        <h1>{land.name}</h1>
        <Title level={4}>
          BDT <span className={styles.price}>{land.price}</span>
        </Title>
        <p>{land.address}</p>
        <p>
          <BiMap /> Find Me in the Map
        </p>
        <p>
          <AiFillYoutube /> Watch Videos
        </p>
        <p>
          <ImDownload3 /> Documents
        </p>
        <Button
          className={styles.button}
          type="primary"
          icon={<MailOutlined />}
        >
          Mail
        </Button>
        <Button type="primary" icon={<PhoneOutlined />}>
          Call Now - {land.phone}
        </Button>
      </div>
    </Card>
  );
};

export default Adbox;
