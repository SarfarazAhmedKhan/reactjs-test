export const API_CONFIG = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
    BASE_URL_QA: "https://fcsqaapi.appnofy.com",
    BASE_URL_DEV: "https://fcsdevapi.appnofy.com",
    BASE_URL_PROD: "https://fix-car-share-admin.appnofy.com",
    TEST: "https://api.airtable.com/v0/appBTaX8XIvvr6zEC"
};

export const API_ROUTES = {
    USER_LIST: {
        DETAILS: `https://api.airtable.com/v0/appBTaX8XIvvr6zEC/Users`,
        LOGS: "https://assets.interviewhelp.io/INTERVIEW_HELP/reactjs/logs.json"
    }
};

export const CONTENT_TYPE = {
    JSON: "application/json",
    FORM_DATA: "multipart/form-data"
};

export const HTTP_STATUS = {
    UNAUTHORIZED: 401,
    OK: 200,
    CREATED: 201,
    PAYLOAD_TOO_LARGE: 413,
    SERVER_ERROR: 500
};
