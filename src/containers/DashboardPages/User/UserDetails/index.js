import React, { useState } from "react";
import { Row, Col, Tabs, Form } from "antd";
import "./index.less";
import placeholderImg from "../../../../assets/logo/placeholder-image.png";
import { GridView } from "../../../../components";
import useGridRequest from "../../../../custom-hooks/useGridRequest";
import { useParams } from "react-router-dom";
import { CheckCircleOutlined, LeftOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import Tag from "../../../../components/Tag";
import { ReactComponent as Search } from "../../../../assets/images/search.svg";
import { TextBox } from "../../../../components/Common/CustomInputs/CustomInput";
import { renderUserDetailsColumns } from "../TableColumns/usersColumns";
import { VIEW_USER_DETAILS } from "../../../../constants/constant";
import { useGetUserDetailsListing } from "../../../../apiServices/usersQueries";
import { history } from "../../../../appRedux/store";

const UserDetails = () => {
    const { TabPane } = Tabs;
    const [form] = Form.useForm();
    const [currentTabItem, setCurrentTabItem] = useState(1);
    const { id } = useParams();
    const [searched, setSearch] = useState(null);
    const { gridRequest: userDetailsRequest, onPagination, onSearch: onUserSearch } = useGridRequest();
    const {
        data: userDetails = {},
        isLoading,
        isFetching
    } = useGetUserDetailsListing(userDetailsRequest, id, currentTabItem);

    const onChange = (key) => {
        setCurrentTabItem(key);
    };

    const userDetailActions = () => {
        console.log("action triggered!");
    };

    const onSearch = (value) => {
        if (value.length > 3) {
            onUserSearch(value);
        }
    };

    const renderTab = (item) => {
        return item.id !== 3 ? (
            <TabPane tab={<div className="gx-mr-3">{item.name}</div>} key={item.id}>
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
                            columns={renderUserDetailsColumns(userDetailActions, currentTabItem)}
                            dataRequest={userDetailsRequest}
                            data={userDetails.Data}
                            isLoading={isLoading}
                            tableLayout={"auto"}
                            currentPage={userDetailsRequest.Page ?? 1}
                            pageSize={userDetailsRequest.Limit ?? 10}
                            totalCount={userDetails?.Pagintaion?.Total ?? 0}
                            isFetching={isFetching}
                            tableKey="table-container"
                            rowKey="id"
                            onPaginate={onPagination}
                        />
                    </Form>
                </div>
            </TabPane>
        ) : (
            <TabPane tab={<div className="gx-mr-3">{item.name}</div>} key={item.id}>
                No Data found
            </TabPane>
        );
    };

    return (
        <div>
            <Row gutter={[24, 24]} className="gx-d-flex gx-align-items-center">
                <div
                    className="icon-container gx-d-flex gx-justify-content-center gx-align-items-center"
                    onClick={() => history.goBack()}
                >
                    <LeftOutlined />
                </div>
                <div className="gx-d-flex gx-justify-content-center gx-align-items-center ">
                    <h3 className="gx-mb-0 poppins-medium">Shirley Homes</h3>
                </div>
            </Row>
            <Row gutter={[24, 24]} className="gx-mt-4 gx-mb-2">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="gx-flex-row">
                    <div>
                        <img alt="" width={55} height={55} className="gx-mr-1 round-img" src={placeholderImg} />
                    </div>
                    <div className="gx-flex-column gx-p-3">
                        <div className="gx-flex-row">
                            <h2 className="gx-mb-0 poppins-medium">Shirley Homes</h2>
                            <CheckCircleOutlined className="gx-fs-xl gx-mr-1 gx-ml-2 color-green" />
                            <span className="gx-fs-sm color-green poppins-normal">Active</span>
                        </div>
                        <div className="gx-flex-row gx-mt-2">
                            <Tag Icon={MailOutlined} text={"shirleysmith@Fixcarsharer.com"} />
                            <Tag Icon={MailOutlined} text={"+49 1234 5678"} className={"gx-ml-2"} />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="gx-d-flex gx-justify-content-end">
                    <span className="gx-p-4"> hello</span>
                </Col>
            </Row>
            <Row gutter={[24, 24]} className="gx-mb-4">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Tabs defaultActiveKey="1" onChange={onChange}>
                        {VIEW_USER_DETAILS.map((item) => renderTab(item))}
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
};

export default UserDetails;
