import React, { useState } from "react";
import { Button } from "antd";
import UtilService from "../../util/utils.service";
import { exportTypes } from "../../constants/constant";
const Export = (props) => {
    const [loading, setLoading] = useState(false);

    const { apiCall, disabled, payload, fileName } = props;

    const exportToCsv = async () => {
        setLoading(true);
        const { ok, data, response } = await apiCall(payload);
        if (data) {
            UtilService.exportToFile(data, fileName, exportTypes.CSV);
        }
        setLoading(false);
    };
    return (
        <Button
            loading={loading}
            onClick={exportToCsv}
            className="margin-0 noirProMedium gx-fs-md"
            size="default"
            disabled={disabled || loading}
            style={{ width: "139px", height: "36px", borderRadius: "18px" }}
            type="primary"
            icon={<i className="icon usd-csv gx-mr-2" />}
        >
            Export CSV
        </Button>
    );
};

export default Export;
