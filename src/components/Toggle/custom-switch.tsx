import ant, { Space, Switch } from "antd";
import React from "react";

interface ILabeledToggle {
    checkLabel?: string;
    unCheckedLabel?: string;
    value?: any;
}
const LabeledToggle: React.FC<ILabeledToggle & ant.SwitchProps> = (props) => {
    return (
        <Space>
            <Switch {...props} />
            {props.value || props.checked ? <span>{props.checkLabel}</span> : <span>{props.unCheckedLabel}</span>}
        </Space>
    );
};

export default LabeledToggle;
