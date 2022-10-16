// Response:{
//   ok: Boolean,
//   status: Number,
//   data: Object | null,
//   response : Object
// }

// Example
// Response:{
//   ok: true,
//   status: 200,
//   data: {accessToken:0000},
//   response : {
//     code: 200,
//     errorCode: 6001
//     message: "Success"
//   }
// }

import notificationService from "./notification.service";
import LocalStorageService from "./local-storage.service";
import { create } from "apisauce";
import utilService from "./utils.service";
import AuthService from "./auth.service";
import { STORAGE_CONST } from "./constants/constant";
const apiService = {
    apiSauceInstance: create({
        baseURL: utilService.apiUrl
    }),
    post,
    get,
    put,
    patch,
    del,
    handleResponse: handleResponse
};

async function get(url, queryParams, config) {
    const response = await apiService.apiSauceInstance.get(url, queryParams, config);
    return apiService.handleResponse(response);
}

async function post(url, data, config) {
    const response = await apiService.apiSauceInstance.post(url, data, config);
    return apiService.handleResponse(response);
}

async function put(url, data, config) {
    const response = await apiService.apiSauceInstance.put(url, data, config);
    return apiService.handleResponse(response);
}

async function del(url, data, config) {
    const response = await apiService.apiSauceInstance.delete(url, data, config);
    return apiService.handleResponse(response);
}

async function patch(url, data, config) {
    const response = await apiService.apiSauceInstance.patch(url, data, config);
    return apiService.handleResponse(response);
}

function handleResponse(response) {
    const mutatedResponse = {
        ok: response.ok,
        status: response.status,
        response: {
            code: utilService.getValue(response.data, "response.code", 500),
            message: utilService.getValue(response.data, "response.message", "Something went wrong"),
            errorCode: utilService.getValue(response.data, "response.errorCode", 400)
        }
    };
    const data = utilService.getValue(response.data, "data", response.data);
    if (response.status === 401) {
        notificationService.error("You are not authorized to perform this action");
        LocalStorageService.remove(STORAGE_CONST.USER_INFO);
        utilService.redirectToLogin();
        return { ...mutatedResponse, data: !utilService.isEmpty(data) ? data : null };
    }
    if (response.status === 500) {
        notificationService.error("Something went wrong");
        return { ...mutatedResponse, data: !utilService.isEmpty(data) ? data : null };
    }
    if (response.ok) {
        return { ...mutatedResponse, data };
    } else {
        return { ...mutatedResponse, data: !utilService.isEmpty(data) ? data : null };
    }
}

apiService.apiSauceInstance.addRequestTransform((request) => {
    request.headers["Authorization"] = `Bearer ${AuthService.getToken()}`;
});

export default {
    post: apiService.post,
    get: apiService.get,
    patch: apiService.patch,
    put: apiService.put,
    delete: apiService.del
};
