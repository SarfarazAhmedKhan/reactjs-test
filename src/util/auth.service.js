import { STORAGE_CONST } from "../constants/constant";
import LocalStorageService from "./local-storage.service";

const AuthService = {
    isTokenExist,
    getToken,
    getUserInfo,
    getRole,
    isAdminTokenExist,
    isPublicTokenExist
};

function getRole() {
    let userInfo = LocalStorageService.get(STORAGE_CONST.USER_INFO);
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        return userInfo?.user?.role;
    }
    return null;
}

function isTokenExist() {
    let token = LocalStorageService.get(STORAGE_CONST.TOKEN);
    if (token) {
        return true;
    }
    return false;
}
function isAdminTokenExist() {
    let token = LocalStorageService.get(STORAGE_CONST.TOKEN);
    if (token) {
        return true;
    }
    return false;
}

function isPublicTokenExist() {
    let token = LocalStorageService.get(STORAGE_CONST.PUBLIC_TOKEN);
    if (token) {
        return true;
    }
    return false;
}
function getToken() {
    const externalToken = LocalStorageService.get(STORAGE_CONST.EXTERNAL_TOKEN);
    let token = LocalStorageService.get(STORAGE_CONST.TOKEN);
    // if (token) {
    //     return token;
    // }
    if (externalToken) {
        return externalToken;
    } else if (token) {
        return token;
    }
    return null;
}

function getUserInfo() {
    let userInfo = LocalStorageService.get(STORAGE_CONST.USER_INFO);
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        return userInfo?.user;
    }
    return null;
}

export default AuthService;
