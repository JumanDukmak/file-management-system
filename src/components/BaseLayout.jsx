import { DashboardOutlined, SolutionOutlined, UserOutlined, GroupOutlined,LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import storage from '../utils/storage';
import { LogOutReguest, restDataToLogOut } from '../features/redux/Auth/authSlice';

const { Header, Content, Sider } = Layout;

const BaseLayout = (props) => {
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const handellogout = () => {
        dispatch(LogOutReguest());
        
    };

    const isUnAuth = useSelector((state) => state.auth.logout);
console.log("total :+"+isUnAuth);
    useEffect(() => {
        if (isUnAuth) {
            console.log("in if ::"+isUnAuth);
            dispatch(restDataToLogOut())
            navigate('/login')
        }
      
    }, [isUnAuth]);



    
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const AdminLayout = (
      
            <Layout style={{height:'100vh'}} >
                <Sider
                    trigger={null}
                    
                    collapsible
                    collapsed={collapsed}
                    width={250}
                    
                    style={{
                        background: 'teal',
                        
                    }}

                >
                    <div style={{height: '40px'}}></div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                      
                        style={{
                            height: '94%',
                            borderRight: 0,
                            color:'white',
                            backgroundColor:'teal'
                        }}
                    >
                        <Menu.Item key='1' onClick={()=>navigate('/')}>
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
                            <Menu.Item  key='2'onClick={() => navigate('/Groups')}>All Groups</Menu.Item>
                            <Menu.Item key='3'onClick={() => navigate('/AddGroup')}>Add Group</Menu.Item>
                        </SubMenu>

                        <SubMenu
                            key='sub2'
                            title={
                                <span>
                                    <GroupOutlined />
                                    <span>Files</span>
                                </span>}
                        >
                            
                            <Menu.Item key='4' onClick={() => navigate('/Files')}>All Files</Menu.Item>
                            <Menu.Item key='5' onClick={() => navigate('/UploadFile')}>Add File</Menu.Item>
                        </SubMenu>

                        <SubMenu
                            key='sub3'
                            title={
                                <span>
                                    <SolutionOutlined />
                                    <span>Users</span>
                                </span>}
                        >
                            <Menu.Item key='6'onClick={() => navigate('/Users')}>All Users</Menu.Item>
                        </SubMenu>

                        <Menu.Item key='7'onClick={handellogout}>
                        <LogoutOutlined />
                            <span>Log Out</span>
                            </Menu.Item>
                       

                    </Menu>
                </Sider>

                <Layout
                    style={{ background: '#eaf4f4' }}
                >
                    <Header
                        style={{
                            height: '5vh',
                            display: 'flex',
                            alignItems: 'center',
                            background: '#c9efef',
                            // backgroundColor:'red'

                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined style={{ color: 'teal' }} /> : <MenuFoldOutlined style={{ color: 'teal' }} />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                background: 'transparent',
                                fontSize: '16px',
                                width: 60,
                                height: 40,
                            }}
                        />
                        <div className="demo-logo" />
                    </Header>

                        <Content 
                            style={{
                                // padding: 24,
                                margin: 0,
                                minHeight: 280,
                                //background: colorBgContainer,
                            }}
                        >
                        {props.children}
                      
                        </Content>
                    </Layout>
                </Layout>
       
    );

    const MemberLayout = (
        <Layout style={{height:'100vh'}} >
        <Sider
            trigger={null}
            
            collapsible
            collapsed={collapsed}
            width={250}
            
            style={{
                background: 'teal',
                
            }}

        >
            <div style={{height: '40px'}}></div>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
              
                style={{
                    height: '94%',
                    borderRight: 0,
                    color:'white',
                    backgroundColor:'teal'
                }}
            >
                <Menu.Item key='1' onClick={()=>navigate('/')}>
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
                    <Menu.Item  key='2'onClick={() => navigate('/Groups')}>All Groups</Menu.Item>
                    <Menu.Item key='3'onClick={() => navigate('/AddGroup')}>Add Group</Menu.Item>
                </SubMenu>

                <SubMenu
                    key='sub2'
                    title={
                        <span>
                            <GroupOutlined />
                            <span>Files</span>
                        </span>}
                >
                    
                    <Menu.Item key='4' onClick={() => navigate('/Files')}>All Files</Menu.Item>
                    <Menu.Item key='5' onClick={() => navigate('/UploadFile')}>Add File</Menu.Item>
                </SubMenu>

                <SubMenu
                    key='sub3'
                    title={
                        <span>
                            <SolutionOutlined />
                            <span>Users</span>
                        </span>}
                >
                    <Menu.Item key='6'onClick={() => navigate('/Users')}>All Users</Menu.Item>
                </SubMenu>

                <Menu.Item key='7'onClick={handellogout}>
                <LogoutOutlined />
                    <span>Log Out</span>
                    </Menu.Item>
               

            </Menu>
        </Sider>

        <Layout
            style={{ background: '#eaf4f4' }}
        >
            <Header
                style={{
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    background: '#c9efef',
                }}
            >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined style={{ color: 'teal' }} /> : <MenuFoldOutlined style={{ color: 'teal' }} />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        background: 'transparent',
                        fontSize: '16px',
                        width: 60,
                        height: 40,
                    }}
                />
                <div className="demo-logo" />
            </Header>

                <Content 
                    style={{
                        // padding: 24,
                        margin: 0,
                        minHeight: 280,
                        //background: colorBgContainer,
                    }}
                >
                {props.children}
              
                </Content>
            </Layout>
        </Layout>
    );

    const LoginLayout = (
        <>
            <Layout>
                <Content 
                    style={{
                        // padding: 24,
                        margin: 0,
                        minHeight: 280,
                        //background: colorBgContainer,
                    }}
                >
                        {props.children}
                </Content>
            </Layout >
        </>
    );

    if(storage.getToken() == null) {
        return LoginLayout
    } else if (storage.getRole() == 'Admin') {
       
    
        return AdminLayout
    } else if (storage.getRole() == 'Member') {

        return MemberLayout
    }
  
   
}

export default BaseLayout