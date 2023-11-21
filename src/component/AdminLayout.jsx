import { DashboardOutlined, SolutionOutlined, UserOutlined, GroupOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useState } from 'react';

const { Header, Content, Sider } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={250}
                    style={{
                        background: colorBgContainer,
                    }}

                >
                    <div style={{height: '50px'}}></div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                    >
                        <Menu.Item key='1'>
                            <DashboardOutlined />
                            <span>Dashboard</span>
                        </Menu.Item>

                        <SubMenu
                            key='sub1'
                            title={
                                <span>
                                    <UserOutlined />
                                    <span>Groups</span>
                                </span>}
                        >
                            <Menu.Item key='2'>All Groups</Menu.Item>
                            <Menu.Item key='3'>Add Group</Menu.Item>
                        </SubMenu>

                        <SubMenu
                            key='sub2'
                            title={
                                <span>
                                    <GroupOutlined />
                                    <span>Files</span>
                                </span>}
                        >
                            <Menu.Item key='4'>All Files</Menu.Item>
                            <Menu.Item key='4'>Add File</Menu.Item>
                        </SubMenu>

                        <SubMenu
                            key='sub4'
                            title={
                                <span>
                                    <SolutionOutlined />
                                    <span>Users</span>
                                </span>}
                        >
                            <Menu.Item key='5'>All Users</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>

                <Layout
                    style={{ background: '#eaf4f4' }}
                >
                    <Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            background: '#5fa8d3',
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined style={{ color: 'white' }} /> : <MenuFoldOutlined style={{ color: 'white' }} />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                background: '#5fa8d3',
                                fontSize: '16px',
                                width: 64,
                                height: 50,
                            }}
                        />
                        <div className="demo-logo" />
                    </Header>

                    <Layout
                        style={{
                            padding: '0 24px 24px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>

                        <Content 
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                //background: colorBgContainer,
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout >
        </>
    );
}

export default AdminLayout