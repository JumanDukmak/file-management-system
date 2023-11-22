import { Button, Col, Form, Input, Row, Typography } from 'antd'

const Register = () => {
    return (
        <div>
            <div style={{ height: '195px' }}></div>
            <Row justify="space-around" align="middle">
                <Col span={8}></Col>
                <Col span={8}>
                    <Form
                        layout="vertical"
                        name="register"
                        requiredMark={false}
                        initialValues={{ remember: true }}
                        wrapperCol={{
                            span: 14,
                            offset: 5
                        }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Typography
                            style={{ fontSize: '28px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Register</Typography>
                        <br />

                        <Form.Item
                            name="username"
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

export default Register