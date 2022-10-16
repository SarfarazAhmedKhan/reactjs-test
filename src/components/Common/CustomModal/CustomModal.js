import React from "react";
import { Modal } from "antd";

const CustomModal = ({
    visible,
    handleCancel,
    body,
    handleOkSubmit,
    okText,
    cancelText,
    width,
    footer,
    closable,
    cssClass,
    title,
    form,
    buttonLoader
}) => (
    <Modal
        confirmLoading={buttonLoader}
        onOk={form ? form.submit : handleOkSubmit}
        okText={okText ? okText : "Submit"}
        cancelText={cancelText ? cancelText : "Cancel"}
        className={cssClass}
        title={title}
        footer={footer && null}
        closable={closable && false}
        centered
        visible={visible}
        onCancel={handleCancel}
        width={width}
    >
        {body}
    </Modal>
);

export default CustomModal;
