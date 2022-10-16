import React from "react";
import { Input } from "antd";

import "./index.less";
const { TextArea } = Input;
const CustomTextArea = (props) => {
    return <TextArea type="text" className="custom-control-input" {...props} />;
};

export default CustomTextArea;
