import React from "react";
import utilService from "./../../../../util/utils.service";

const _TITLE_KEY = {
    1: "title",
    2: "titleSpanish"
};

const TitleColumn = ({ data }) => {
    return (
        <div className="gx-ml-6px score-btn">
            <span className="cb-default-text gx-font-12">
                {utilService.replaceNullWithPlaceholder(data[_TITLE_KEY[data?.languageId]])}
            </span>
        </div>
    );
};

export default TitleColumn;
