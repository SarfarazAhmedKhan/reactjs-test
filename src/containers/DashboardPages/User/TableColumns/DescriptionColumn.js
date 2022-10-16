import React from "react";
import utilService from "./../../../../util/utils.service";

const _DESCRIPTION_KEY = {
    1: "description",
    2: "descriptionSpanish"
};

const DescriptionColumn = ({ data }) => {
    return (
        <div className="gx-ml-6px score-btn">
            <span className="cb-default-text gx-font-12">
                {utilService.replaceNullWithPlaceholder(data[_DESCRIPTION_KEY[data?.languageId]])}
            </span>
        </div>
    );
};

export default DescriptionColumn;
