import { FC, useState } from "react";
import { Upload, Button, Progress } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

interface AddAssetProps {
  landid: string;
}

const props = {
  name: "file",
  action: (file: any) => console.log(file),

  headers: { enctype: "multipart/form-data" },
};
const AddAsset: FC<AddAssetProps> = ({ landid }) => {
  const [progress, setProgress] = useState(0);
  const [defaultFileList, setDefaultFileList] = useState([]);

  const handleChange = ({ file, fileList, event }: any) => {
    // console.log(file, fileList, event);
    //Using Hooks to update the state to the current filelist
    setDefaultFileList(fileList);
    //filelist - [{uid: "-1",url:'Some url to image'}]
  };
  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event: any) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("file", file);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_ADDRESS}/admin/upload/${landid}/media`,
        fmData,
        config
      );
      onSuccess("Ok");
    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };
  return (
    <div>
      <Upload
        style={{ width: "auto" }}
        customRequest={uploadImage}
        onChange={handleChange}
        listType="picture-card"
        className="image-upload-grid"

        // defaultFileList={defaultFileList}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {progress > 0 ? <Progress percent={progress} /> : null}
    </div>
  );
};

export default AddAsset;
