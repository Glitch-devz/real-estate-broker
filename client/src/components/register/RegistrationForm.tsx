import { FC } from "react";
import { Form, Input, Button } from "antd";
import "./RegistrationForm.css";

const RegistrationForm: FC = () => {
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

return (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    className="registrationForm"
  >
    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Register Now
      </Button>
    </Form.Item>

  </Form>
  );
};


export default RegistrationForm;
