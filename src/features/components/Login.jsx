import { useEffect, useState } from "react";
import { Button, Col, Form, Input, message, Row, Typography, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  LoginReguest } from "../redux/Auth/authSlice";
import storage from "../../utils/storage";

function Login() {
    const [messageApi, contextHolder] = message.useMessage();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        user_name: "",
        password: "",
    });

    const isAuth = useSelector((state) => state.auth.done);

    useEffect(() => {
        if (isAuth) {
            if(storage.getRole() == 'Admin') {
                navigate("/");
            }
            else if (storage.getRole() == 'Member') {
                navigate("/");
            }
        }

        if(auth.error != null){
        messageApi.open({
            type: 'error',
            content: auth.error,
        });
    }
}, [isAuth,auth.error]);

    const onFinish = () => {
        dispatch(LoginReguest(user));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
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
                        style={{ textAlign: "center", color: "#02e079"}}>
                            Sign in 
                        </Typography.Title>

                        <Typography.Title
                        level={4}
                        style={{ textAlign: "center", color: "white", paddingBottom: "30px"}}>
                            Start your managment journey
                        </Typography.Title>
                        
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your username!",
                                },
                            ]}
                            style={{height:"60px"}}
                        >
                            <Input
                                placeholder="Username"
                                onChange={(e) => setUser({ ...user, user_name: e.target.value })}
                                style={{height:"50px",borderRadius:"12px"}}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                            style={{height:"60px"}}
                        >
                            <Input.Password
                                placeholder="Password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                style={{height:"50px", borderRadius:"12px"}}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                className="default-button"
                            >
                                {auth.loading ? "Loading...." : "LOG IN"}
                            </Button>
                            <div className="conatiner_register">
                                Dont Have an account?
                                <Link to="/Register"
                                style={{color:"#02e079"}}>
                                    register now!</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={9}></Col>
            </Row>
        </div>
    );
}
export default Login;