import { Col, Form, Row, Select } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetUsersListings } from "../../../apiServices/usersQueries";
import { GridView } from "../../../components";
import TitleBar from "../../../components/TitleBar";
import useGridRequest from "../../../custom-hooks/useGridRequest";
import { renderColumns, renderSortColumns } from "./TableColumns/usersColumns.js";

const Users = () => {
    useEffect(() => {
        getData("maxRecords=10");
    }, []);
    const [form] = Form.useForm();
    const [searched, setSearch] = useState(null);
    const [sort, setSort] = useState(false);
    const [maxRecord, setMaxRecord] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const [record, setRecords] = useState([]);
    const [pageLoading, setpageLoading] = useState(false);
    const { gridRequest: userRequest, onSearch: onUserSearch } = useGridRequest();
    const { data: users = {}, isLoading, isFetching } = useGetUsersListings(userRequest);

    const { Option } = Select;

    const getData = async (params) => {
        console.log("yuppp", params);
        try {
            setpageLoading(true);
            const { data } = await Axios.get(`https://api.airtable.com/v0/appBTaX8XIvvr6zEC/Users?${params}`, {
                headers: {
                    Authorization: `Bearer key4v56MUqVr9sNJv`
                }
            });
            setpageLoading(false);
            let newArray = data?.records?.splice(Math.max(data?.records?.length - 10, 1));
            setRecords(newArray);
        } catch (e) {
            setpageLoading(false);
        }
    };

    const onChange = (values) => {
        if (values == 1) {
            setSort(true);
            getData("fields=Id&fields=Name");
        } else {
            setSort(false);
        }
    };

    const onPagination = (pageCount) => {
        console.log("hi", pageCount);
        if (pageCount == 0) {
            setCurrentPage(1);
            getData(`maxRecords=${10}`);
        } else {
            pageCount += 10;
            console.log("bi", pageCount);
            setMaxRecord(pageCount);
            setCurrentPage(pageCount / 10);
            getData(`maxRecords=${pageCount}`);
        }
    };

    console.log("viewwww", record?.length);

    return (
        <div className="main-container">
            <TitleBar title="Users" />
            <div className="gx-main-content-wrapper">
                <Form name="basic" form={form} layout="horizontal">
                    <Row align="middle" justify="space-between" className="gx-m-0 gx-mb-4" gutter={[12, 12]}>
                        <Col className="gx-col-grid gx-mb-0 gx-p-0" sm={24} xs={24} md={24} xl={8} lg={8}>
                            Sort by :{" "}
                            <Select
                                showSearch
                                placeholder="Select Sort"
                                optionFilterProp="children"
                                onChange={onChange}
                            >
                                <Option value="0">default</Option>
                                <Option value="1">Id & Name</Option>
                            </Select>
                        </Col>
                    </Row>
                    <GridView
                        columns={sort ? renderSortColumns() : renderColumns()}
                        dataRequest={userRequest}
                        data={record}
                        isLoading={isLoading || pageLoading}
                        tableLayout={"auto"}
                        currentPage={currentPage}
                        pageSize={10}
                        totalCount={users?.records?.length}
                        tableKey="table-container"
                        rowKey="id"
                        onPaginate={onPagination}
                    />
                </Form>
            </div>
        </div>
    );
};

export default Users;
