import {Col, Row} from "antd";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
    useGetDocumentsData,
    useGetRidesData,
    useGetUsersOnboardedData,
    useSharersEarningData
} from "../../../apiServices/dashboardQueries";
import { MONTHS } from "../../../constants/DashboardConstants";

import "./Dashboard.less";

const TEXT_STYLE = {
    colors: ["#707070"],
    opacity: 0.5,
    fontSize: "12px",
    fontFamily: "Roboto Regular, Arial",
    fontWeight: 400,
    cssClass: "apexcharts-yaxis-label"
};
const Dashboard = (props) => {
    const { data: onboardedGraphData } = useGetUsersOnboardedData();
    const { data: documentsGraphData } = useGetDocumentsData();
    const { data: ridesGraphData } = useGetRidesData();
    const { data: sharerEarningsGraphData } = useSharersEarningData();

    // Data Manipulations for graph
    const lineColData = onboardedGraphData && onboardedGraphData?.map((item) => Number(item.Count));
    const lineColMonths = onboardedGraphData && onboardedGraphData?.map((item) => MONTHS[item.Month]);
    const verifiedDocs = documentsGraphData && documentsGraphData.Verifieds?.map((item) => Number(item.Count));
    const unVerifiedDocs = documentsGraphData && documentsGraphData.UnVerifieds?.map((item) => Number(item.Count));
    const areaDataMonths = documentsGraphData && documentsGraphData.Verifieds?.map((item) => item.Month);
    const sharersAmountData =
        sharerEarningsGraphData && sharerEarningsGraphData.map((item) => Number(item.SharerAmount));

    const valueFormatter = (value) => {
        if (value / 1000 >= 1) {
            console.log(value / 1000);
            return `${Math.ceil(value / 1000)} k`;
        }
        return value;
    };

    const area = {
        series: [
            {
                name: "verified",
                data: verifiedDocs
            },
            {
                name: "unverified",
                data: unVerifiedDocs
            }
        ],
        options: {
            grid: {
                show: true,
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            chart: {
                height: 250,
                type: "area",
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                width: 3
            },
            colors: ["#7D26CD", "#EE5007"],
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.5,
                    opacityTo: 0.1,
                    stops: [25, 75, 100, 100]
                }
            },
            xaxis: {
                type: "month",
                categories: areaDataMonths,
                labels: {
                    show: true,
                    style: TEXT_STYLE
                }
            },
            yaxis: {
                tickAmount: 3,
                labels: {
                    show: true,
                    style: TEXT_STYLE,
                    formatter: valueFormatter
                },
                min: 0
            },
            legend: {
                show: false
            },
            markers: {
                size: 5
            }
        }
    };

    const bar = {
        series: [
            {
                data: [Number(ridesGraphData?.OfferedRideCount), Number(ridesGraphData?.SharedRideCount)]
            }
        ],
        options: {
            chart: {
                height: 241,
                type: "bar",
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            colors: ["#7D26CD", "#EE5007"],
            plotOptions: {
                bar: {
                    distributed: true,
                    borderRadius: 4,
                    columnWidth: 28
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ["Offered Rides", "Shared Rides"],
                axisTicks: {
                    show: false
                },
                labels: {
                    show: true,
                    style: TEXT_STYLE
                }
            },
            yaxis: {
                tickAmount: 4,
                labels: {
                    show: true,
                    style: TEXT_STYLE,
                    formatter: valueFormatter
                },
                min: 0
            },
            legend: {
                show: false
            }
        }
    };

    const line = {
        series: [
            {
                name: "Sharers Amount - Count",
                data: sharersAmountData
            }
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#7D26CD7F",
                    top: 10,
                    left: 2,
                    blur: 10,
                    opacity: 1
                },
                toolbar: {
                    show: false
                }
            },
            colors: ["#7D26CD"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                width: 3
            },
            markers: {
                size: 3,
                strokeColors: "#EE5007",
                strokeWidth: 2,
                background: "#EE5007",
                colors: "white"
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                axisTicks: {
                    show: false
                },
                labels: {
                    show: true,
                    style: TEXT_STYLE
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: TEXT_STYLE,
                    formatter: valueFormatter
                },
                tickAmount: 7,
                min: 0
            }
        }
    };

    var lineCol = {
        series: [
            {
                name: "Number of Users Onboarded",
                type: "column",
                data: lineColData
            },
            {
                name: "Month in line",
                type: "line",
                data: lineColData
            }
        ],
        chart: {
            height: 241,
            type: "bar",
            stacked: false,
            zoom: { enabled: false },
            toolbar: { show: false }
        },
        stroke: {
            width: 2,
            curve: "smooth"
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#EE5007", "#7D26CD"],
        plotOptions: {
            bar: {
                distributed: true,
                columnWidth: 20,
                borderRadius: 3
            }
        },
        labels: lineColMonths,
        xaxis: {
            type: "month",
            axisTicks: {
                show: false
            },
            labels: {
                show: true,
                style: TEXT_STYLE
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: TEXT_STYLE
            },
            tickAmount: 4,
            min: 0
        },
        legend: {
            show: false
        }
    };

    return (
        <div className="main-container">
            <div className="poppins-medium gx-fs-xl custom-mb-19">Dashboard</div>

            <Row className="gx-m-0 gx-p-0" justify="space-between">
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7} className="gx-p-0">
                    <div className="graph-container">
                        <div className="graph-header">Rides</div>
                        <ReactApexChart
                            options={bar.options}
                            series={bar.series}
                            type="bar"
                            // height={241}
                            height={280}
                        />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} className="custom-ph-21">
                    <div className="graph-container">
                        <div className="graph-header">Sharers Earning</div>
                        <ReactApexChart
                            options={line.options}
                            series={line.series}
                            type="line"
                            // height={241}
                            height={280}
                        />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7} className="gx-p-0">
                    <div className="graph-container">
                        <div className="graph-header">User Onboarded</div>
                        <ReactApexChart
                            options={lineCol}
                            series={lineCol.series}
                            // height={241}
                            height={280}
                        />
                    </div>
                </Col>
            </Row>
            <div className="graph-container custom-mt-25">
                <div className="flex-row justify-between">
                    <div className="graph-header">Documents</div>
                    <div className="custom-mr-25">
                        <div className="flex-row-center custom-mb-6">
                            <span className="verified-icon" />
                            <div className="gx-text-light-gray">Verified Documents</div>
                        </div>
                        <div className="flex-row-center custom-mb-7">
                            <span className="unverified-icon" />
                            <div className="gx-text-light-gray">Un-verified Documents</div>
                        </div>
                    </div>
                </div>
                <ReactApexChart
                    options={area.options}
                    series={area.series}
                    type="area"
                    // height={250}
                    height={400}
                />
            </div>
        </div>
    );
};;;;;;;;;;;

export default Dashboard;

