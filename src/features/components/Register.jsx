import { useEffect, useState } from 'react';
import { Button, message, Form, Input, Typography, Row, Col, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterReguest } from '../redux/Auth/registerSlice';

function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const [user, setUser] = useState({
    name: "",
    email: "",
    user_name: "",
    password: "",
  });

  const register = useSelector((state) => state.register);
  const isAuth = useSelector((state) => state.register.done);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('in effect')
    console.log(isAuth)
    if (isAuth) {
        navigate("/");
    }

    if (register.error != null) {
      console.log('in error');
      console.log(register.error);
      messageApi.open({
        type: 'error',
        content: register.error,
      });
    }
  }, [isAuth, register.error]);





  const onFinish = (e) => {

    console.log(user);
    dispatch(RegisterReguest(user));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
  <div className="div_login">
    <Row>
      <Col span={9}></Col>
      <Col span={6}>
      {contextHolder}
      <div className="container">
        <Image
          width={240}
          src="logo.png"
          preview={false}
        />
      </div>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography.Title 
        level={3}
        style={{ textAlign: 'center', color: '#02e079' }}>Register!</Typography.Title>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please enter your name!',
            },
          ]}
        >
          <Input 
          placeholder='Enter your name' 
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{height:"40px",borderRadius:"12px"}} />
        </Form.Item>

        <Form.Item
          name="user_name"
          rules={[
            {
              required: true,
              message: 'Please enter your user_name!',
            },
          ]}
        >
          <Input 
          placeholder='Enter your username' 
          onChange={(e) => setUser({ ...user, user_name: e.target.value })}
          style={{height:"40px",borderRadius:"12px"}} />
        </Form.Item>


        <Form.Item
          name="email"
          type='email'
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
          ]}
        >
          <Input 
          placeholder='Enter your email' 
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={{height:"40px",borderRadius:"12px"}} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password 
          placeholder='Enter your password' 
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          style={{height:"40px",borderRadius:"12px"}} />
        </Form.Item>

        <Form.Item
        >
          <Button 
          type="primary" 
          htmlType="submit" 
          block 
          className='customButton'>
            {register.loading ? 'Loading....' : ' Register'}
          </Button>

          <div className='conatiner_register'>
            I Have an account
            <Link 
            to='/login'
            style={{color:"#02e079"}}>
              Sign in!</Link>
          </div>
        </Form.Item>
      </Form>
      </Col>
      <Col span={9}></Col>
    </Row>
  </div>
  )
}
export default Register;