export const UNAUTHENTICATED_ROUTES = {
    LOGIN: "/login",
    RESET_PASSWORD: "/reset-password/:resetToken",
    FORGET_PASSWORD: "/forget-password",
    SET_PASSWORD: "/set-password/:userId",
    ADD_ACTIVITY: "/add-external-activity",
    EVENT_SUCCESS: "/event-submitted"
};

export const AUTHENTICATED_ROUTES = {
    DASHBOARD: "/dashboard",
    USER: "/user",
    USER_LIST: "/userlist",
    VIEW_USER_DETAILS: "/user/:id",
    SERVICE_RATE: "/service-rates",
    OFFER_AND_PROMOTION: "/offer-and-promotions",
    PAYMENT: "/payments",
    MANAGE_RIDES: "/manage-rides"
};

