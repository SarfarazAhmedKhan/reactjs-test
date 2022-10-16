import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {onNavStyleChange, toggleCollapsedSideNav} from "../../appRedux/slices/Settings";
import Logo from "../../assets/logo/fix-car-sharer-logo.svg";
import "./index.less";

import {
    NAV_STYLE_DRAWER,
    NAV_STYLE_FIXED,
    NAV_STYLE_MINI_SIDEBAR,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    TAB_SIZE,
    THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import MainLogo from "../../components/Logo/MainLogo";

const SidebarLogo = () => {
    const dispatch = useDispatch();
    const {width, themeType, navCollapsed} = useSelector(({settings}) => settings);
    let navStyle = useSelector(({settings}) => settings.navStyle);
    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
        navStyle = NAV_STYLE_DRAWER;
    }
    return (
        <div className="gx-layout-sider-header">
            {navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR ? (
                <div className="gx-linebar">
                    <i
                        className={`gx-icon-btn icon icon-${navStyle === NAV_STYLE_MINI_SIDEBAR
                            ? "menu-unfold text-color-white"
                            : "menu-fold text-color-white"
                            } ${themeType !== THEME_TYPE_LITE ? "gx-text-white" : ""}`}
                        onClick={() => {
                            if (navStyle === NAV_STYLE_DRAWER) {
                                dispatch(toggleCollapsedSideNav(!navCollapsed));
                            } else if (navStyle === NAV_STYLE_FIXED) {
                                dispatch(onNavStyleChange(NAV_STYLE_MINI_SIDEBAR));
                            } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
                                dispatch(toggleCollapsedSideNav(!navCollapsed));
                            } else {
                                dispatch(onNavStyleChange(NAV_STYLE_FIXED));
                            }
                        }}
                    />
                </div>
            ) : null}

            <Link to="/dashboard" className="gx-site-logo side-logo-container ">
                <img src={Logo} alt="app-logo" />
            </Link>
        </div>
    );
};

export default SidebarLogo;
