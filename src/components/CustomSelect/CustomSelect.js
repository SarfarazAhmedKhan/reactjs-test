import React from 'react'
import { Select } from 'antd';
import './CustomSelect.less';


const CustomSelect = (props) => {
    const { className, children } = props;
    return (
        <Select
            className={`custom-select-optimize ${className}`}
            {...props}
        >
            {children}
        </Select>
    )
}

export default CustomSelect;