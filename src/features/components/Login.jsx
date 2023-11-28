import { useEffect, useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginReguest } from "../redux/Auth/authSlice";
import storage from "../../utils/storage";

function Login() {
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
                navigate("/add/file");
            }
            else if (storage.getRole() == 'Member') {
                navigate("/show/file");
            }
        }
    }, [isAuth]);

    const onFinish = () => {
        dispatch(LoginReguest(user));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="div_login">
            <Form
                className="loginForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Typography.Title style={{ textAlign: "center", color: "white" }}>
                    Welcom Back!
                </Typography.Title>
                <Form.Item
                    label={<span style={{ color: "white" }}>Username</span>}
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your username!",
                        },
                    ]}
                >
                    <Input
                        placeholder="Enter enter your Username"
                        onChange={(e) => setUser({ ...user, user_name: e.target.value })}
                    />
                </Form.Item>

                <Form.Item
                    label={<span style={{ color: "white" }}>Password</span>}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        className="customButton"
                    >
                        {auth.loading ? "Loading...." : "Login"}
                    </Button>
                    <div className="conatiner_register">
                        Dont Have an account? <Link to="/Register">register now!</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Login;
