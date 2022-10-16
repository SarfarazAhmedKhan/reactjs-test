import React from "react";
import { Modal } from "antd";

import "./index.less";

const CustomModal = (props) => {
    return (
        <Modal {...props} centered className="custom-modal">
            {props?.children}
        </Modal>
    );
};

export default CustomModal;
