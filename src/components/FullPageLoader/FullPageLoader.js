import { Spin } from "antd";
import React from "react";

function FullPageLoader({ tip, size, className, indicator }) {
    return (
        <React.Fragment>
            <div className="loader loading">
                <Spin indicator={indicator ? indicator : undefined} size={size} tip={tip} spinning />
            </div>
        </React.Fragment>
    );
}

export default FullPageLoader;
