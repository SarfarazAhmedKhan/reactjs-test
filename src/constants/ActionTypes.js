// Customizer const
export const TOGGLE_COLLAPSED_NAV = "TOGGLE_COLLAPSE_MENU";
export const WINDOW_WIDTH = "WINDOW-WIDTH";
export const SWITCH_LANGUAGE = "SWITCH-LANGUAGE";

//Contact Module const
export const FETCH_START = "fetch_start";
export const FETCH_SUCCESS = "fetch_success";
export const FETCH_ERROR = "fetch_error";
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const HIDE_MESSAGE = "HIDE_MESSAGE";
export const ON_SHOW_LOADER = "ON_SHOW_LOADER";
export const ON_HIDE_LOADER = "ON_HIDE_LOADER";

//Auth const
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNIN_GOOGLE_USER = "SIGNIN_GOOGLE_USER";
export const SIGNIN_GOOGLE_USER_SUCCESS = "SIGNIN_GOOGLE_USER_SUCCESS";
export const SIGNIN_FACEBOOK_USER = "SIGNIN_FACEBOOK_USER";
export const SIGNIN_FACEBOOK_USER_SUCCESS = "SIGNIN_FACEBOOK_USER_SUCCESS";
export const SIGNIN_TWITTER_USER = "SIGNIN_TWITTER_USER";
export const SIGNIN_TWITTER_USER_SUCCESS = "SIGNIN_TWITTER_USER_SUCCESS";
export const SIGNIN_GITHUB_USER = "SIGNIN_GITHUB_USER";
export const SIGNIN_GITHUB_USER_SUCCESS = "signin_github_user_success";
export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNIN_USER_SUCCESS = "SIGNIN_USER_SUCCESS";
export const SIGNOUT_USER = "SIGNOUT_USER";
export const SIGNOUT_USER_SUCCESS = "SIGNOUT_USER_SUCCESS";
export const INIT_URL = "INIT_URL";
export const USER_DATA = "user_data";
export const USER_TOKEN_SET = "user_token_set";

//Regex  const
export const Patterns = {
    passwordPattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    PASSWORD_PATTERN: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]).{8,}$/,
    phoneNumberPatterns: /^([(][0-9]{3}[)] )[0-9]{3}-[0-9]{4}$/,
    passwordPattern3: "^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]).{8,}$",
    urlPattern:
        "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
    alphaNumeric: "^([a-zA-Z0-9 ]+)$",
    alphaWithSpecChar: "^[ A-Za-z_@./#&+-]*$",
    WEBSITE: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
};
