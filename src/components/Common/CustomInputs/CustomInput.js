import React from "react";
import { Form, Input, InputNumber } from "antd";
import style from "./CustomInput.less";

const validation = {
    fullName: {
        message: "Please enter descendant's name.",
        required: true
    },
    email: {
        type: "email",
        message: "Please enter valid email"
    },
    password: {
        type: "password",
        message: "Please enter valid password"
    },
    notCompulsory: {
        required: false
    }
};
export const TextBox = ({
    label,
    placeholder,
    type,
    validationKey,
    name,
    hasFeedback,
    allowClear,
    prefix,
    dependencies,
    change,
    value,
    disabled
}) => {
    let validator;
    if (validationKey) {
        validator = validation[validationKey];
    }
    return (
        <Form.Item
            label={label}
            rules={[validator]}
            name={name}
            hasFeedback={hasFeedback}
            dependencies={[dependencies]}
            validateTrigger="onBlur"
            className={`${style.textBoxWrapper} poppins-medium gx-m-0`}
            initialValue={value}
        >
            {type !== "password" ? (
                <Input
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={change || null}
                    allowClear={allowClear}
                    prefix={prefix}
                    type={type}
                />
            ) : (
                <Input.Password placeholder={placeholder} />
            )}
        </Form.Item>
    );
};
export const AccordianTextBox = ({ placeholder, disabled, change, icon }) => (
    <Input
        disabled={disabled}
        suffix={icon}
        onChange={change}
        placeholder={placeholder}
        className={style.accordianTextField}
    />
);
export const NumberField = ({ name, validationKey, label, placeholder, value, addOnAfter }) => {
    const validator = validationKey && validation[validationKey];

    return (
        <Form.Item name={name} rules={[validator]} validateTrigger="onBlur" initialValue={value} label={label}>
            <InputNumber
                max={100000}
                addonAfter={addOnAfter}
                controls={false}
                placeholder={placeholder}
                className={style.inputNumberField}
            />
        </Form.Item>
    );
};
TextBox.defaultProps = {
    type: "text",
    placeholder: "PlaceHolder",
    hasFeedback: false,
    dependencies: "",
    change: "",
    customRule: undefined
};
