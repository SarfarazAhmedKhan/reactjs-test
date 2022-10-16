import React from "react";
import "./index.less";

const Tag = ({ Icon, text, className }) => {
    return (
        <div className={`gx-flex-row gx-justify-content-center gx-align-items-center custom-tag gx-mt-2 ${className}`}>
            <Icon className="tag-icon tag-color gx-mr-2" />
            <span className="poppins tag-color gx-m-0 gx-p-0">{text}</span>
        </div>
    );
};

export default Tag;
