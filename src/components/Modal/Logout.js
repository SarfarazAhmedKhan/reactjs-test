import {Modal, Button, Col} from "antd";
import React, {useState} from "react";
import {useHistory} from "react-router";

import "./index.less";

const LogoutModal = ({visible = false, onCancel, loading, onSuccess}) => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    async function logout() {
        // setIsLoading(true);
        // const { ok, data, response } = await AdminApiService.logout();
        // if (ok) {
        //     for (let key of LOGOUT_KEYS) {
        //         LocalStorageService.remove(key);
        //     }
        //     utilService.redirectToLogin();
        //     onSuccess();
        // } else {
        //     notificationService.error("Something went wrong");
        // }
        // setIsLoading(false);
    }
    return (
        <>
            <Modal
                className="logout-modal"
                centered
                title="Confirmation"
                visible={visible}
                onOk={onSuccess}
                onCancel={onCancel}
                footer={[
                    <Button key="back" onClick={onCancel} className="noirProMedium">
                        Cancel
                    </Button>,
                    <Button
                        loading={isLoading}
                        disabled={isLoading}
                        onClick={logout}
                        className="confirm-button noirProMedium"
                    >
                        Logout
                    </Button>
                ]}
            >
                <div
                    style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
                    className="modal-content"
                >
                    <i className="icon usd-warning pending-color gx-mb-3 fs-60" />
                    <h3 className="noirProMedium gx-fs-xl">Are you sure?</h3>
                    <p className="noirProRegular gx-fs-md">Are you sure you want to logout the application?</p>
                </div>
            </Modal>
        </>
    );
};

export default LogoutModal;
