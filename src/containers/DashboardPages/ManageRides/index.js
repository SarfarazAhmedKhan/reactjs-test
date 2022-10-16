import { Col, Form, Row } from "antd";
import React, { useState } from "react";
import { GridView } from "../../../components";
import TitleBar from "../../../components/TitleBar";
// import { SimpleButton } from "../../../components/common/CustomButtons/CustomButtons";
import { TextBox } from "../../../components/Common/CustomInputs/CustomInput";
import useGridRequest from "../../../custom-hooks/useGridRequest";
import { renderColumns } from "./TableColumns/manageRidesColumns.js";
import { SearchOutlined } from "@ant-design/icons";
import { ReactComponent as Search } from "../../../assets/images/search.svg";
import { useManageRidesListing } from "../../../apiServices/manageRidesQueries";

const ManageRides = () => {
    const [form] = Form.useForm();
    const [searched, setSearch] = useState(null);
    const { gridRequest: ridesRequest, onPagination, onSearch: onRidesSearch } = useGridRequest();
    const { data: rides = {}, isLoading, isFetching } = useManageRidesListing(ridesRequest);

    const onSearch = (value) => {
        if (value.length > 3) {
            onRidesSearch(value);
        }
    };

    return (
        <div className="main-container">
            <TitleBar title="Manage Rides" />
            <div className="gx-main-content-wrapper">
                <Form name="basic" form={form} layout="horizontal">
                    <Row align="middle" justify="space-between" className="gx-m-0 gx-mb-4" gutter={[12, 12]}>
                        <Col className="gx-col-grid gx-mb-0 gx-p-0" sm={24} xs={24} md={24} xl={8} lg={8}>
                            <div className="searchBarContainer">
                                <TextBox
                                    placeholder={"Search..."}
                                    value={searched}
                                    type={"search"}
                                    prefix={<Search />}
                                    allowClear={true}
                                    validationKey={"notCompulsory"}
                                    name={"Search"}
                                    change={(e) => onSearch(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <GridView
                        columns={renderColumns()}
                        dataRequest={ridesRequest}
                        data={rides.Data}
                        isLoading={isLoading}
                        tableLayout={"auto"}
                        currentPage={ridesRequest.Page ?? 1}
                        pageSize={ridesRequest.Limit ?? 10}
                        totalCount={rides?.Pagintaion?.Total ?? 0}
                        isFetching={isFetching}
                        tableKey="table-container"
                        rowKey="id"
                        onPaginate={onPagination}
                    />
                </Form>
            </div>
        </div>
    );
};

export default ManageRides;
