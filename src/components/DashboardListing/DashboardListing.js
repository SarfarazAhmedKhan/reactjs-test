import { Col, Row } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { API_STORAGE_KEY, DASHBOARD_TAB_STATUS } from "../../constants/constant";
import { ACTIVITY_TYPE } from "../../constants/constantTypes";
import dateTimeService, { getDateDifference } from "../../util/date-time.service";
import utilService from "../../util/utils.service";
import "./DashboardListing.less";

export default function DashboardListing({ children, tabStatus, viewReport, className = "", ...props }) {
    const { content, contentCreatedOn, ownerName, categoryName, avatar, media, reporterName = 'Your Neighbor' } = props?.data;
    const { formatDateToSpecificTZ, DATE_TIME_FORMAT } = dateTimeService;
    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData(API_STORAGE_KEY.USER_DETAILS);
    const MINUTES = userInfo.timezone.minutes;

    const chatImageMissing = tabStatus.title == DASHBOARD_TAB_STATUS[0].title && media?.length ? false : true;
    const col2 = {
        md: chatImageMissing ? 24 : 16,
        lg: chatImageMissing ? 24 : 18,
        xl: chatImageMissing ? 24 : 20,
        xxl: chatImageMissing ? 24 : 20
    };

    return (
        <Row span={24} className="activity-pd">
            {(tabStatus.title != DASHBOARD_TAB_STATUS[0].title || !chatImageMissing) && (
                <Col>
                    <img
                        className={`${avatar ? "avatar-img" : "dashboard-img-placeholder"}`}
                        src={
                            media?.length
                                ? media[0]?.viewableLink
                                : ACTIVITY_TYPE.EVENT == props?.data?.activityType
                                ? require("../../assets/images/event.png")
                                : require("../../assets/images/program.jpg")
                        }
                    />
                </Col>
            )}
            <Col className={`${!chatImageMissing}`} style={{ flex: 1 }}>
                <div className="content-space-between">
                    <h3 className="activity-title gx-font-weight-medium">{content?.headline}</h3>
                    <div className="activity-action-btn">
                        <h5
                            onClick={() => viewReport(props?.data)}
                            className="activity-action-title gx-font-weight-medium"
                        >
                            {props?.reported ? "Review Report" : "Review Activity"}
                        </h5>
                    </div>
                </div>
                <div className="content-pd">
                    <h5 className="content-body">{content?.description}</h5>
                </div>
                <div>
                    <span className="icon-margin">
                        <i className={`icon usd-account`} />
                        <span className="content-report">{ownerName}</span>
                    </span>
                    <span className="icon-margin">
                        <i className={`icon usd-clock`} />
                        <span className="content-report">{`${formatDateToSpecificTZ(
                            contentCreatedOn,
                            DATE_TIME_FORMAT.US_DATE_TIME_FORMAT
                        )} ${contentCreatedOn && "CST"}`}</span>
                    </span>
                    <span className="icon-margin">
                        <i className={`icon usd-category`} />
                        <span className="content-report">{categoryName}</span>
                    </span>
                </div>
                {props?.reported && (
                    <div className="mg-t">
                        <i className="icon warn-red usd-warning" />
                        <span className="report-txt-body">{`Reported by ${reporterName}`}</span>
                        <span className="report-txt-body mg-l">
                            {getDateDifference(props?.data.reportedOn, MINUTES)}
                        </span>
                    </div>
                )}
            </Col>
        </Row>
    );
}

