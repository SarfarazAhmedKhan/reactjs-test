import React from "react";
import { Image } from "antd";
import "./ImageList.less";
import Remove from "../../assets/images/iconclose.svg";

export default function ImageList({ children, onRemove, data, showPreview, className = "", ...props }) {
    return (
        <>
            <div className="flexRow">
                {data?.map((item, index) => {
                    console.log({ item });
                    return (
                        <>
                            <Image
                                className="image"
                                src={item.viewableLink || URL.createObjectURL(item.originFileObj)}
                                preview={showPreview}
                            />
                            <Image
                                className="remove-icon"
                                src={Remove}
                                preview={false}
                                width={20}
                                onClick={() => onRemove(item?.uid)}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
}
