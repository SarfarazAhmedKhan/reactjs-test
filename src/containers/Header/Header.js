import React, {useState} from "react";
import {Collapse} from "antd";
import {Link, useHistory} from "react-router-dom";
import {NodeCollapseOutlined, CloseOutlined} from "@ant-design/icons";
import {AdminApiService} from "../../ApiServices";
import MainLogo from "../../components/Logo/MainLogo";
import {LOGOUT_KEYS} from "../../constants/constant";
import {AUTHENTICATED_ROUTES} from "../../routes/constant";
import LocalStorageService from "../../util/local-storage.service";
import {default as notificationService, default as utilService} from "../../util/utils.service";
import "./index.less";

const COLLAPSE_STATE = {
    OPEN: "1",
    CLOSE: ""
};

const {Panel} = Collapse;
const Header = (props) => {
    const history = useHistory();
    const [collapseOpen, setCollapseOpen] = useState(COLLAPSE_STATE.CLOSE);

    async function logout() {
        const {ok, data, response} = await AdminApiService.logout();
        if (ok) {
            for (let key of LOGOUT_KEYS) {
                LocalStorageService.remove(key);
            }
            utilService.redirectToLogin();
        } else {
            notificationService.error("Something went wrong");
        }
    }

    function callback(key) {}

    return (
        <>
            <nav className={`navbar navbar-expand-xl ${props?.className} header-container`}>
                <div className="container">
                    <Link className="navbar-brand" href="#">
                        <MainLogo className="logo" isDark />
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="nav-toggle">
                            {collapseOpen == COLLAPSE_STATE.OPEN ? (
                                <CloseOutlined
                                    color="#006385"
                                    style={{fontSize: "25px", color: "#006385"}}
                                    onClick={() => setCollapseOpen(COLLAPSE_STATE.CLOSE)}
                                />
                            ) : (
                                <i
                                    className="icon usd-bars"
                                    style={{fontSize: "25px", color: "#006385"}}
                                    onClick={() => setCollapseOpen(COLLAPSE_STATE.OPEN)}
                                />
                            )}
                        </div>
                        <ul className="navbar-nav right-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">Designation Central</li>
                            {/*
                            <li className="nav-item" onClick={logout}>
                                <a className="nav-link">Logout</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header-collapse">
                <Collapse
                    activeKey={collapseOpen}
                    onChange={callback}
                    style={{display: `${collapseOpen == COLLAPSE_STATE.CLOSE ? "none" : "block"}`}}
                >
                    <Panel key="1" showArrow={false}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">Designation Central</li>

                            <li className="nav-item" onClick={logout}>
                                <a className="nav-link">Logout</a>
                            </li>
                        </ul>
                    </Panel>
                </Collapse>
            </div>
        </>
    );
};

export default Header;
