import React from "react";
import { Layout } from "antd";
import Routes from "../../routes";
import Sidebar from "../Sidebar/index";
import FullPageLoader from "../../components/FullPageLoader";

const { Content } = Layout;

const MainApp = () => {
    const renderRoutes = () => {
        if (false) {
            // if (isLoading) {
            return <FullPageLoader />;
        } else {
            return <Routes />;
        }
    };

    return (
        <Layout className="gx-app-layout gx-pb-0">
            <Sidebar />
            <Layout className="gx-pb-0">
                <Content className={`gx-layout-content justify-between`} id="layout">
                    <div>{renderRoutes()}</div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainApp;
