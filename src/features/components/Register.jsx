

import React, { useEffect, useState } from 'react';
import { Button, Checkbox, message, Form, Input,Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterReguest } from '../redux/Auth/registerSlice';
import storage from '../../utils/storage';



function Register() {
  const [messageApi, contextHolder] = message.useMessage();

const[user,setUser]=useState({
  name:"",
  email:"",
  user_name:"",
  password:"",
});

const register=useSelector((state) => state.register);
const isAuth = useSelector((state) => state.register.done);

const dispatch = useDispatch();
    const navigate = useNavigate();



useEffect(() => {

  console.log('in effect')
  console.log(isAuth)
    if (isAuth) {
       
          
            navigate("/");
       }

if(register.error != null){
console.log('in error' );
  console.log(register.error);
messageApi.open({
    type: 'error',
    content: 'This is an error message',
  });
}



}, [isAuth,register.error]);





  const onFinish = (e) => {
 
    console.log(user);

dispatch(RegisterReguest(user));


  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(

    <div className='div_login'>
            {contextHolder}

    <Form  className='loginForm'
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
       autoComplete="off"
      >
    
        <Typography.Title style={{textAlign:'center',color:'white'}}>Register!</Typography.Title>
        <Form.Item
          label={<span style={{ color: 'white' }}>Name</span>}
          name="name"
          
          rules={[
            {
              required: true,
              message: 'Please enter your name!',
            },
          ]}
        >
          <Input placeholder='Enter enter your name'   onChange={(e)=>setUser({...user,name:e.target.value})}/>
        </Form.Item>
    
        <Form.Item
          label={<span style={{ color: 'white' }}>UserName</span>}
          name="user_name"
          
          rules={[
            {
              required: true,
              message: 'Please enter your user_name!',
            },
          ]}
        >
          <Input placeholder='Enter enter your user_name'  onChange={(e)=>setUser({...user,user_name:e.target.value})}/>
        </Form.Item>


        <Form.Item
          label={<span style={{ color: 'white' }}>Email</span>}
          name="email"
          type='email'
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
          ]}
        >
          <Input placeholder='Enter enter your email'  onChange={(e)=>setUser({...user,email:e.target.value})}/>
        </Form.Item>
    
        
    
    
    
    
    
    
        <Form.Item
          label={<span style={{ color: 'white' }}>Password</span>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder='Enter your password'  onChange={(e)=>setUser({...user,password:e.target.value})}/>
        </Form.Item>
    
        
        <Form.Item
          
        >
          <Button type="primary" htmlType="submit" block className='customButton'>
           {register.loading ? 'Loading....': ' Register'}
          </Button>
    
          
          <div className='conatiner_register'>
     I Have an account 
     <Link to='/login'>Sign in!</Link>
    
    
     </div>
        </Form.Item>
      </Form>
    
    
    
    
     </div>

  )



}
export default Register;