import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MAIN_SIDE_BAR_OPTIONS } from "../../constants/Roles";
import { THEME_TYPE_LITE } from "../../constants/ThemeSetting";
import "./index.less";

const SidebarContent = () => {
    let { themeType, pathname } = useSelector(({ settings }) => settings);
    let sideBarOptions = MAIN_SIDE_BAR_OPTIONS["Admin"];
    const { SubMenu, Item } = Menu;
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const renderSideBarOptions = (props) => {
        if (!props.sideBarOptions) {
            return;
        }
        return (
            <>
                {sideBarOptions.map((sidebarOption, indexOne) => {
                    return (
                        <Item key={sidebarOption.selectedOptionKey}>
                            <Link to={sidebarOption.linkTo} className="poppins-regular">
                                <Row align="middle" className="gx-m-0">
                                    <Col className="gx-p-0">
                                        {selectedKeys == sidebarOption.selectedOptionKey
                                            ? sidebarOption.selectedIcon
                                            : sidebarOption.icon}
                                    </Col>
                                    <Col className="gx-p-0 sidebar-text">
                                        <span>{sidebarOption.text}</span>
                                    </Col>
                                </Row>
                            </Link>
                        </Item>
                    );
                })}
            </>
        );
    };

    let selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[0];

    return (
        <>
            <div className="gx-sidebar-content sidebar-scroll custom-sidebar-scroll">
                <Menu
                    defaultOpenKeys={[defaultOpenKeys]}
                    selectedKeys={[selectedKeys]}
                    theme={themeType === THEME_TYPE_LITE ? "light" : "dark"}
                    mode="inline"
                    className="custom-sidebar-scroll side-menu"
                >
                    {renderSideBarOptions({ sideBarOptions: sideBarOptions })}
                </Menu>
            </div>
        </>
    );
};

SidebarContent.propTypes = {};
export default SidebarContent;
