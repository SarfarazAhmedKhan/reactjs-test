import React from "react";
import { Checkbox } from "antd";

import "./index.less";

const GroupCheckBox = (props) => {
    return (
        <Checkbox.Group className="custom-group-checkbox" {...props}>
            {props?.info?.map((info, index) => {
                return (
                    <Checkbox key={info?.id} value={info?.id}>
                        <p style={{ display: "flex", flexDirection: "row", margin: "0px" }}>{info?.label}</p>
                    </Checkbox>
                );
            })}
        </Checkbox.Group>
    );
};

export default GroupCheckBox;
