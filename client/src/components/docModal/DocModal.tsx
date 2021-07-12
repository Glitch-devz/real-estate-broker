import { FC, useState } from 'react';
import { Modal, Button } from 'antd';
import { ImDownload3 } from "react-icons/im";

const DocModal: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <a style={{ color:"black" }} href="#modal" onClick={showModal}>
        <p><ImDownload3/> Documents</p>
      </a>
      <Modal title="Download The Docs" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p><ImDownload3/> CS</p>
        <p><ImDownload3/> RA</p>
        <p><ImDownload3/> RS</p>
      </Modal>
    </>
  );
};

export default DocModal;
