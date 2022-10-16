import React from "react";
import { AUTHENTICATED_ROUTES } from "../routes/constant";
import User from "../assets/side-menu-icons/user.svg";
import WhiteUser from "../assets/side-menu-icons/white-user.svg";

export const MAIN_SIDE_BAR_OPTIONS = {
    Admin: [
        {
            text: "UsersList",
            linkTo: AUTHENTICATED_ROUTES.USER_LIST,
            selectedOptionKey: "user_list",
            icon: <img src={User} />,
            selectedIcon: <img src={WhiteUser} />
        }
    ]
};
