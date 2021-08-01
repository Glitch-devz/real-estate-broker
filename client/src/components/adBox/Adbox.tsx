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

const Adbox: FC<LandProps> = ({ land }) => {
  const [images] = useState([
    "https://thumbs.dreamstime.com/b/land-sale-sign-empty-green-meadow-near-tree-surrounded-white-wooden-fence-beautiful-sky-background-red-letters-211205620.jpg",
    "https://na.rdcpix.com/1504101927/8ecb8b5c10a19ccbe1daba7bc38ec77cw-c287292xd-w826_h860_q80.jpg",
    "http://reg-public.s3.amazonaws.com/Images/land-F52258238.jpg",
    "https://assets.site-static.com/blogphotos/182/51_Land_Louisville.jpg",
    "https://opimedia.azureedge.net/-/media/images/men/editorial/articles/magazine-articles/1974/05-01/tips-for-dealing-with-real-estate-agents/country-property-fence-web.jpg",
  ]);
  const [mainImage, setMainImage] = useState(images[0] || "");
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
          {images.map((img, id) => (
            <img
              key={id}
              style={{ height: "60px", objectFit: "contain" }}
              src={img}
              alt={id.toString()}
              onClick={() => setMainImage(img)}
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
