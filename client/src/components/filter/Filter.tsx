import { FC } from "react";
import { Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

const Filter: FC = () => {
  return (
    <div>
      <Select
        defaultValue="Gulhan"
        style={{ width: 320 }}
        allowClear
        onChange={handleChange}
      >
        <Option value="Gulshan">Gulshan</Option>
        <Option value="Banani">Banani</Option>
        <Option value="Mirpur">Mirpur</Option>
        <Option value="Uttara">Uttara</Option>
      </Select>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </div>
  );
};

export default Filter;
