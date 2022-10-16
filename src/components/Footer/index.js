import React from "react";
import {Layout} from "antd";
import {FOOTER_TEXT_APP_NAME} from "../../../src/constants/constant";

export default function Footer({text, className, footerClass}) {
    const {Footer} = Layout;

    return (
        <Footer className={footerClass}>
            {/* <div className={className}>{text ?? FOOTER_TEXT_APP_NAME}</div> */}
        </Footer>
    );
}
