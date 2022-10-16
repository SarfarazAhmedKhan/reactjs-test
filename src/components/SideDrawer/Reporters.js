import React from "react";
import { useSelector } from "react-redux";
import { Drawer, Divider } from "antd";
import dateTimeService from "../../util/date-time.service";
import utilService from "../../util/utils.service";
import "./Reporters.less";

export default function Reporters({ children, className = "", ...props }) {
    const { visible, onClose, data } = props;
    const { formatDateToSpecificTZ, DATE_TIME_FORMAT } = dateTimeService;
    const { user } = useSelector((store) => store.user);
    const MINUTES = user?.timezone && utilService.getMinutesFromTZ(user?.timezone);

    const reporters = (data) => {
        return (
            <>
                <h4>{data?.reporterName}</h4>
                <p>{data?.reason}</p>
                <p>{formatDateToSpecificTZ(data?.reportedOn, DATE_TIME_FORMAT.US_DATE_TIME_FORMAT, MINUTES)}</p>
                <Divider />
            </>
        );
    };

    return (
        <Drawer closable={false} width={520} title="Reporters" onClose={onClose} visible={visible}>
            {data?.map((item) => reporters(item))}
        </Drawer>
    );
}
