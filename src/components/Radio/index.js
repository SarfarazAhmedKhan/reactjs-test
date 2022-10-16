import React from "react";
import { Radio } from "antd";

import "./index.less";

const Options = {
    Yes: true,
    No: false
};

const RadioGroup = (props) => {
    return (
        <Radio.Group className="custom-radio-group" {...props}>
            {props?.data?.map((info, index) => {
                return (
                    <Radio.Button className="check-btn" key={index} value={Options[info]}>
                        <p style={{ display: "flex", flexDirection: "row", margin: "0px", alignItems: "center" }}>
                            <span className="tip-key">{props?.optionFor[index]}</span> {info}
                        </p>
                    </Radio.Button>
                );
            })}
        </Radio.Group>
    );
};

export default RadioGroup;
