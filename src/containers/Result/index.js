import React from "react";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { UNAUTHENTICATED_ROUTES } from "../../routes/constant";

const SuccessResult = () => {
    const history = useHistory();

    return (
        <Result
            icon={<SmileOutlined />}
            title="Great, we have done all the operations!"
            extra={
                <Button type="primary" onClick={() => history.push(UNAUTHENTICATED_ROUTES.ADD_ACTIVITY)}>
                    Submit another response?
                </Button>
            }
        />
    );
};

export default SuccessResult;
