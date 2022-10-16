import { Input } from "antd";
import PropTypes from "prop-types";
import React from "react";
import "./SearchBox.less";
import { Space, Row } from "antd";
const { Search } = Input;

const searchButton = (
    <Space size="small" align="middle">
        <span className="usd-search h6 gx-text-white" />
        <span>Search</span>
    </Space>
);

const SearchBox = ({ placeholder, onSearch, disabled }) => {
    return (
        <Search
            className="custom-search-btn custom-ant-input"
            placeholder={"Search..."}
            allowClear
            enterButton={searchButton}
            size="middle"
            onSearch={onSearch}
            disabled={disabled}
        />
    );
};

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    disabled: PropTypes.bool
};

SearchBox.defaultProps = {
    placeholder: "Search...",
    onSearch: () => {},
    disabled: false
};

export default SearchBox;
