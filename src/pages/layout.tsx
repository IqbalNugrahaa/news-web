import { Menu } from "antd";
import { Layout as AntLayout } from 'antd';
const { Header, Content, Footer } = AntLayout;
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate();

    const items = [
        {
            key: 'news',
            label: 'News',
            onClick: () => navigate('/news'),
        },
        {
            key: 'portal',
            label: 'Portal',
            onClick: () => navigate('/portal'),
        },
    ];

    return (
        <AntLayout style={{
            minHeight: '100vh', // full height
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['news']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: 0, // remove padding for full layout
            }}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Copyright 2021 News Portal
            </Footer>
        </AntLayout>
    );
}