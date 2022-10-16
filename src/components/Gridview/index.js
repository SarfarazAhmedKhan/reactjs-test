import React from "react";
import PropTypes from "prop-types";
import { Col, Pagination, Row, Select, Space, Table } from "antd";

import { SORT_ORDER, SORT_ORDER_VALUE } from "./../../constants/constant";

import "./grid-view.less";
const GridView = (props) => {
    // const {Option} = Select;
    const handleOnChange = (page, pageSize) => {
        const newOffset = pageSize * (page - 1);
        return props?.onPaginate(newOffset, pageSize);
    };
    const handleOnChangeTable = (pagination, filters, sort) => {
        const { onSort, clearSort } = props;
        const { columnKey, order } = sort;
        if (order === SORT_ORDER.ASC) {
            onSort(columnKey, SORT_ORDER_VALUE.ascend);
        } else if (order === SORT_ORDER.DESC) {
            onSort(columnKey, SORT_ORDER_VALUE.descend);
        } else {
            clearSort();
        }
    };

    // const handlePageSizeChange = (value) => {
    //     return props?.onPaginate(0, value);
    // };

    function itemRender(current, type, originalElement) {
        if (type === "prev") {
            return <a>Previous</a>;
        }
        if (type === "next") {
            return <a>Next</a>;
        }
        return originalElement;
    }
    // const countOpt = [10, 20, 30];

    return (
        <div className={props?.tableKey}>
            <Table
                loading={props?.isFetching}
                className="gx-table-header-color"
                rowKey={props?.rowKey}
                style={{
                    float: "center"
                }}
                columns={props.columns}
                tableLayout={props.tableLayout ? props.tableLayout : "fixed"}
                dataSource={props?.data}
                pagination={false}
                onChange={handleOnChangeTable}
            />
            {!props?.tabKey && !props?.isLoading ? (
                <Row justify="end" align="center" className="gx-m-0">
                    <Col className="gx-p-0">
                        <Pagination
                            className="table-pagination"
                            defaultCurrent={props?.currentPage}
                            hideOnSinglePage={true}
                            pageSize={props.pageSize}
                            total={props?.totalCount}
                            showSizeChanger={props.totalCount > 1000}
                            onChange={handleOnChange}
                        />
                    </Col>
                </Row>
            ) : null}
        </div>
    );
};

GridView.prototype = {
    columns: PropTypes.array,
    data: PropTypes.any,
    sort: PropTypes.any,
    rowKey: PropTypes.any
};

export default GridView;
