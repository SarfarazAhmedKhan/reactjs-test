import React from "react";
import {Layout, Dropdown, Menu} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import notificationIcon from "../../assets/images/bell-icon.png"
import arrowDown from "../../assets/logo/arrow-down.svg"
import placeholderImg from "../../assets/logo/placeholder-image.png"
import {toggleCollapsedSideNav} from "appRedux/slices/Settings";
import {NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE} from "../../constants/ThemeSetting";

import "./index.less";

const {Header} = Layout;
const Topbar = (props) => {
    const {width, navCollapsed, navStyle} = useSelector(({settings}) => settings);
    const dispatch = useDispatch();

    const getTitle = () => {
        // const {user} = props;
        const user = {
            firstName: "Susanne",
        };

        return (
            <div className="flex-row-center">
                <span className="profile-name-text">{user.firstName}</span>
                <img className="cursor" src={require("assets/logo/arrow-down.svg")} />
            </div>
        );
    };

    const notificationMsgs = [
        {
            image: placeholderImg,
            name: "Jenny",
            message: "Jenny just scheduled a Ride"
        },
        {
            image: placeholderImg,
            name: "Alfred",
            message: "Alfred added a vehicle Michael just schedules a Ride Michael just schedules a Ride Michael just schedules a Ride"
        },
        {
            image: placeholderImg,
            name: "Michael",
            message: "Michael just schedules a Ride"
        },
    ]

    const dropdownContent = () => {
        return (
            <div className="notification-wrapper">
                <div className="custom-mb-14 gx-fs-md poppins-medium">Notifications</div>
                {notificationMsgs.map((item, index) => {
                    return (
                        <>
                            <div className="flex-row custom-mb-5">
                                <img width={34} height={34} src={item.image} className="round-img" />
                                <div>
                                    <div className="gx-fs-sm poppins-medium">{item.name}</div>
                                    <div className="gx-fs-xs poppins-regular fc-text-gray">{item.message}</div>
                                </div>
                            </div>
                            <div className="divider-container">
                                <div className="notification-divider" />
                            </div>
                        </>
                    )
                })}
                {notificationMsgs.length > 2 &&
                    <div className="gx-fs-sm see-more poppins-medium">See more</div>
                }
            </div>
        )
    }

    return (
        <Header className="justify-between">
            {navStyle === NAV_STYLE_DRAWER ||
                ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ? (
                <div className="gx-linebar gx-mr-3 text-color-white">
                    <i
                        className="gx-icon-btn icon toggle-menu icon-menu gx-text-white"
                        onClick={() => {
                            dispatch(toggleCollapsedSideNav(!navCollapsed));
                        }}
                    />
                </div>
            ) : <div />}
            <div className="flex-row-center">
                <Dropdown overlay={dropdownContent} trigger={['click']} placement="bottomRight">
                    <img src={notificationIcon} className="cursor custom-mr-22" />
                </Dropdown>
                <img
                    alt=""
                    width={40}
                    height={40}
                    className="gx-mr-1 round-img"
                    src={placeholderImg}
                />
                <h1 className="margin-0 poppins-medium gx-fs-lg dark-text">
                    {getTitle()}
                </h1>
            </div>
        </Header>
    );
};

export default Topbar;
