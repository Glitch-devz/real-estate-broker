import { FC } from "react";
import { Typography } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.css";

const { Title } = Typography;
const Navbar: FC = () => {
  return (
    <div className={styles.navContainer}>
      {/* Top Navbar */}
      <nav className={styles.navbarTop}>
        <div>
          {" "}
          <PhoneOutlined /> +880 1234 123456{" "}
        </div>
        <Title> Glitch Broker </Title>
        <div>
          {" "}
          <MailOutlined /> contact@glitch.com{" "}
        </div>
      </nav>
      <hr className={styles.navHr} />

      {/* bottom navbar */}
      {/* <Menu mode="horizontal" className={styles.navbarBottom}>
        <Menu.Item>          
        </Menu.Item>
      </Menu> */}
    </div>
  );
};

export default Navbar;
