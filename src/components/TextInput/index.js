import React from "react";
import { Radio, Input } from "antd";

import "./index.less";

const TextInput = (props) => {
    return <Input type="text" className="custom-control-input" {...props} />;
};

export default TextInput;
