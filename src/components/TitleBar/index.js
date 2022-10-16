import React from "react";

const TitleBar = ({ title }) => {
    return (
        <div className="flex-row-center justify-between mb-19">
            <div className="poppins-medium gx-fs-xl">{title}</div>
        </div>
    );
};

export default TitleBar;
