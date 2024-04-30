import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = () => (
  <div className=' md:mt-[70px]  max-w-96 mx-auto w-[540px] min-h-80 font-varela border-none 
  bg-gradient-to-r from-purple-600 to-black px-6 rounded-lg py-8 '>
  <Form 
  layout='vertical'
    name="basic"
   
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item  
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
     
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item> <section className="flex text-left gap-4">
                

                <Form.Item>
                  <Button className=" bg-black text-white border-none flex justify-center" htmlType="submit">
                    <p className=" font-varela bg-slate-950 ">Submit </p>
                  </Button>
                </Form.Item>
                <Form.Item>
                  
                  
                 
                  <Form.Item>
                  <Link to="/signup"> <p> SignUp</p> </Link>
                </Form.Item>
               
                </Form.Item>
                
              </section>
                  </Form.Item>

  </Form>
  </div>
);
export default App;