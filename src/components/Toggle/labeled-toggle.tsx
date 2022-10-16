import ant, { Space, Switch } from "antd";
import React from "react";

interface ILabeledToggle {
    leftlabel?: string;
    rightlabel?: string;
    disable?: number;
}
const LabeledToggle: React.FC<ILabeledToggle & ant.SwitchProps> = (props) => {
    return (
        <Space className="LabeledToggle">
            {props?.leftlabel && (
                <span style={{ color: "#0a5272" }} className="noirProMedium">
                    {props.leftlabel}
                </span>
            )}
            <Switch {...props} />
            {props?.rightlabel && (
                <span style={{ color: "#0a5272" }} className="noirProMedium">
                    {props.rightlabel}
                </span>
            )}
        </Space>
    );
};

export default LabeledToggle;
