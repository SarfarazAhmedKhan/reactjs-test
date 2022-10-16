import { Avatar } from "antd";
import React from "react";
import anonymous from "../../../../assets/images/anonymous.png";
import utilService from "../../../../util/utils.service";

const { replaceNullWithPlaceholder } = utilService;

const renderImage = (record) => {
    return (
        <div className="gx-d-flex justify-content-between align-items-center">
            <img src={record} />
        </div>
    );
};

export const renderColumns = (userActions) => {
    return [
        {
            title: "Avatar",
            key: "avatar",
            align: "center",
            dataIndex: "avatar",
            render: (user, values) => {
                const { fields } = values;
                if (fields?.avatar == undefined) {
                    return replaceNullWithPlaceholder(fields?.Name[0]);
                } else {
                    return renderImage(fields?.avatar);
                }
            }
        },
        {
            title: "id",
            key: "id",
            dataIndex: "id",
            render: (_, values) => {
                const { fields } = values;
                return replaceNullWithPlaceholder(fields?.Id);
            }
        },
        {
            title: "name",
            key: "name",
            dataIndex: "name",
            render: (_, values) => {
                const { fields } = values;
                return replaceNullWithPlaceholder(fields?.Name);
            }
        },
        {
            title: "occupation",
            key: "occupation",
            dataIndex: "occupation",
            render: (_, values) => {
                const { fields } = values;
                return replaceNullWithPlaceholder(fields?.occupation);
            }
        }
    ];
};

export const renderSortColumns = (userActions) => {
    return [
        {
            title: "id",
            key: "id",
            dataIndex: "id",
            render: (_, values) => {
                const { fields } = values;
                return replaceNullWithPlaceholder(fields?.Id);
            }
        },
        {
            title: "name",
            key: "name",
            dataIndex: "name",
            render: (_, values) => {
                const { fields } = values;
                return replaceNullWithPlaceholder(fields?.Name);
            }
        }
    ];
};
