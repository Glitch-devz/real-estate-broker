import { FC } from "react";
import { Card, Image, Typography, Button } from "antd";
import { BiMap } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

import styles from "./Adbox.module.css";
import "./Adbox.css";
import DocModal from "../docModal/DocModal";

const { Title } = Typography;
const Adbox: FC = () => {
  const price: string = "18,000,000";
  const address: string = "Sector 6, Uttara, Dhaka";

  return (
    <Card>
      <Image
        width={400}
        src="https://thumbs.dreamstime.com/b/land-sale-sign-empty-green-meadow-near-tree-surrounded-white-wooden-fence-beautiful-sky-background-red-letters-211205620.jpg"
      />
      <div className={styles.adInfo}>
        <Title level={4}>
          BDT <span className={styles.price}>{price}</span>
        </Title>
        <p>{address}</p>
        <p><BiMap/> Find Me in the Map</p>
        <p><AiFillYoutube/> Watch Videos</p>
        <DocModal/>
        <br/>
        <Button className={styles.button} type="primary" icon={<MailOutlined />}>
          Mail
        </Button>
        <Button type="primary" icon={<PhoneOutlined />}>
            Call Now
          </Button>
      </div>
    </Card>
  );
};

export default Adbox;
