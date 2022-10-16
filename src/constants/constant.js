export const PAGINATION_CONSTANT = {
    PAGE_SIZE: 10,
    PAGE_NUMBER: 1
};

export const tableSort = {
    ASCENDING: "ascend",
    DESCENDING: "descend"
};

export const DESIGNATION_PAGINATION_CONSTANT = {
    PAGE_SIZE: 5,
    PAGE_NUMBER: 1
};

export const pageProperties = {
    WIDTH: 1024,
    OVERFLOW_Y: 250
};

export const STORAGE_CONST = {
    TOKEN: "TOKEN",
    EXTERNAL_TOKEN: "EXTERNAL_TOKEN",
    THEME_TYPE: "theme_type",
    USER_INFO: "USER_INFO",
    NEIGHBORHOOD_LOOKUP: "NEIGHBORHOOD_LOOKUP"
};

export const supportedFileFormat = ["image/jpg", "image/jpeg", "image/png", "image/jfif"];

export const TOPIC_LOOKUP_TYPE = {
    ALL_NEIGHORHOOD: "2",
    CHAT_TOPICS: "1"
}

export const API_STORAGE_KEY = {
    VIEW_ACTIVITY: "VIEW_ACTIVITY",
    VIEW_ACTIVITY_LIST: 'VIEW_ACTIVITY_LIST',
    GENERAL_TAG_LOOKUP: "GENERAL_TAG_LOOKUP",
    ACCOMMODATION_LOOKUP: "ACCOMMODATION_LOOKUP",
    TRANSPORTATION_LOOKUP: "TRANSPORTATION_LOOKUP",
    NEIGHBORHOOD_LOOKUP: "NEIGHBORHOOD_LOOKUP",
    GENERAL_TAG_KEY: "GENERAL_TAG",
    ACCOMMODATION_KEY: "ACCOMMODATION",
    TRANSPORTATION_KEY: "TRANSPORTATION",
    FREEBIE_CATEGORY: "FREEBIE_CATEGORY",
    REPORTED_FREEBIES: "REPORTED_FREEBIES",
    USER_DETAILS: "USER_DETAILS",
    CATEGORY_LIST: "CATEGORY_LIST",
    ACCESS_LIST: "ACCESS_LIST",
    EXPLORE_LIST: "EXPLORE_LIST",
    ACCESS_LOOKUP: "ACCESS_LOOKUP",
    EXPLORE_LOOKUP: "EXPLORE_LOOKUP",
    CHAT_POST: "CHAT_POST",
    CHAT_COMMENT: "CHAT_COMMENT",
    REPLIES_DATA: "REPLIES_DATA",
    SUB_REPLIES_DATA: "SUB_REPLIES_DATA",
    PROFILE_INFO: "PROFILE_INFO",
    TIMEZONE_LOOKUP: "TIMEZONE_LOOKUP",
    CHAT_TOPICS: "CHAT_TOPICS",
    CHAT_ALL_TOPICS: "CHAT_ALL_TOPICS",
    SUGGESTED_TOPICS: "SUGGESTED_TOPICS",
    TOPIC_LOOKUP: "TOPIC_LOOKUP"
};

export const RESOURCE_TYPE = {
    PARENT: 0,
    PDF: 1,
    LINK: 2
};

export const CATEGORY_TYPE = {
    CATEGORY: {
        name: "Category",
        value: 1
    },
    SUB_CATEGORY: {
        name: "Sub Category",
        value: 2
    }
};

export const LOGOUT_KEYS = [STORAGE_CONST.TOKEN, STORAGE_CONST.USER_INFO, STORAGE_CONST.EXTERNAL_TOKEN];

export const ADMIN_ROLE = [
    {text: "Administrator", value: 1},
    {text: "Moderator", value: 2}
];

export const APP_NAME_MINI = "";

export const THEME = {
    LITE: "light",
    DARK: "dark"
};

export const SORT_ORDER = {
    ASC: "ascend",
    DESC: "descend"
};

export const SORT_ORDER_VALUE = {
    ascend: "ASC",
    descend: "DESC"
};

export const CODE_FORMATS = {
    Alphanumeric: 1,
    Alphabetic: 2,
    Numeric: 3
};

export const CODE_FORMAT_OPTIONS = [
    {
        value: 1,
        name: "Alphanumeric"
    },
    {
        value: 2,
        name: "Alphabetic"
    },
    {
        value: 3,
        name: "Numeric"
    }
];

export const OFFERS_AND_PROMOTION_STATUS = {
    1: "Unused",
    2: "Used"
};
export const VIEW_USER_DETAILS = [
    {
        id: 1,
        name: "Taken Rides"
    },
    {
        id: 2,
        name: "Offered Rides"
    },
    {
        id: 3,
        name: "Documents"
    }
];

export const MANAGE_RIDE_STATUS = {
    1: "On Schedule",
    2: "On Ride",
    3: "Completed",
    4: "Cancelled",
    5: "Expired",
    6: "Deleted",
    10: "Created"
};

export const ScheduleType = {
    Seeker: 1,
    Sharer: 2
};

export const RIDE_STATUS_ENUM = [
    {
        id: -1,
        value: null
    },
    {
        id: 1,
        value: "Confirmed"
    },
    {
        id: 2,
        value: "Ongoing"
    },
    {
        id: 3,
        value: "Completed"
    },
    {
        id: 4,
        value: "Cancelled"
    },
    {
        id: 5,
        value: "Expired"
    },
    {
        id: 6,
        value: "Deleted"
    }
];
