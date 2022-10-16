import React from "react";
import { Upload } from "antd";
import ImageList from "../ImageList";
import { IMAGE_VALIDATION_LIMIT } from "../../constants/constant";

const { Dragger } = Upload;

const CustomDragger = ({ validation, showPreview, ...props }) => {
    console.log({ props })
    const uploadDocument = ({ file, fileList, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };
    return (
        <>
            <Dragger
                itemRender={(a, file, fileList, { remove }) => {
                    return <ImageList onRemove={remove} data={[file]} showPreview={showPreview} />;
                }}
                customRequest={uploadDocument}
                {...props}
            >
                {props?.children}
            </Dragger>

            {validation && <p className="error-msg">{IMAGE_VALIDATION_LIMIT.LIMIT}</p>}
        </>
    );
};

export default CustomDragger;
