import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { useState } from 'react';
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '../redux/Auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const auth = useSelector((state) => state.auth);

    const [user, setUser] = useState({
    user_name: "",
    password: "",
    });

    const onFinish = (values) => {
        setUser((user) => ({
            ...user,
            user_name: values.user_name,
            password: values.password,
        }));
        console.log(user);
        dispatch(LoginRequest(user));
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div>
            <div style={{ height: '195px' }}></div>
            <Row justify="space-around" align="middle">
                <Col span={8}></Col>
                <Col span={8}>
                    <Form
                        layout="vertical"
                        name="login"
                        requiredMark={false}
                        initialValues={{ remember: true }}
                        wrapperCol={{
                            span: 14,
                            offset: 5
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Typography
                            style={{ fontSize: '28px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Log in</Typography>
                        <br />

                        <Form.Item
                            name="user_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                }
                            ]}
                        >
                            <Input placeholder='User Name' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }
                            ]}
                        >
                            <Input.Password placeholder='Password' />
                        </Form.Item>

                        <br />
                        <Form.Item wrapperCol={{ offset: 5, span: 14 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8}></Col>
            </Row>
            <div style={{ height: '124px' }}></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth,
    }
}

export default connect(mapStateToProps)(Login);
