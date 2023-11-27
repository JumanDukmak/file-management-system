import { DashboardOutlined, SolutionOutlined, UserOutlined, GroupOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const BaseLayout = (props) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const AdminLayout = (
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
                            <Menu.Item key='4' onClick={() => navigate('/show/file')}>All Files</Menu.Item>
                            <Menu.Item key='5' onClick={() => navigate('/add/file')}>Add File</Menu.Item>
                        </SubMenu>

                        <SubMenu
                            key='sub3'
                            title={
                                <span>
                                    <SolutionOutlined />
                                    <span>Users</span>
                                </span>}
                        >
                            <Menu.Item key='6'>All Users</Menu.Item>
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
                        {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout >
        </>
    );

    const MemberLayout = (
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
                            <Menu.Item key='4' onClick={() => navigate('/show/file')}>All Files</Menu.Item>
                            <Menu.Item key='5' onClick={() => navigate('/add/file')}>Add File</Menu.Item>
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
                        {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout >
        </>
    );

    // if(!user)
    // {
    //     return (login/register)
    // }

    // else if (Role.Admin)
    // {
    //     return (
    //         AdminLayout
    //     )
    // }

    // else if (Role.Member)
    // {
    //     return (
    //         MemberLayout
    //     )
    // }
    
}

export default BaseLayout