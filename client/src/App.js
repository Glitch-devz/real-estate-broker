import { useEffect, useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";

const { Header, Footer, Content } = Layout;
function App() {
  const [message, setMessage] = useState("");
  const fetchMessage = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  useEffect(() => {
    fetchMessage();
  }, []);
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {["Home", "About", "Contact Us"].map((item, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{item}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content>{message}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
