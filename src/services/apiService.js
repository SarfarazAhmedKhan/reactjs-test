import { API_CONFIG, HTTP_STATUS } from "../apiServices/apiConfig";
import { create } from "apisauce";
import utilService from "../util/utils.service";

export const BASE_URL = API_CONFIG.TEST;

const apiSauceInstance = create({
    baseURL: BASE_URL
});

// export const setBaseRoute = (newBase) => {
//   apiSauceInstance.setBaseURL(
//     `${newBase}${API_SERVICE.CULTURE}${API_SERVICE.VERSION}`,
//   );
// };

async function get(url, queryParams, config) {
    const response = await apiSauceInstance.get(url, queryParams, config);
    return handleResponse(response);
}

async function post(url, data, config) {
    const response = await apiSauceInstance.post(url, data, config);
    return handleResponse(response);
}

async function put(url, data, config) {
    const response = await apiSauceInstance.put(url, data, config);
    return handleResponse(response);
}

async function patch(url, data, config) {
    const response = await apiSauceInstance.patch(url, data, config);
    return handleResponse(response);
}

async function deleteReq(url, queryParams, config) {
    const response = await apiSauceInstance.delete(url, queryParams, config);
    return handleResponse(response);
}

function handleResponse(response) {
    console.log("API RESPONSE:", response);
    const mutatedResponse = {
        ok: response.ok,
        status: response.status,
        response: {
            code: utilService.getValue(response.data, "Code", response.status),
            message: utilService.getValue(response.data, "Message", response?.problem)
            //   errorCode: utilService.getValue(response.data, "response.errorCode", 400),
        },
        data: !utilService.isEmpty(response.data) ? response.data : null
    };
    switch (response?.problem) {
        // case "CANCEL_ERROR":
        //   mutatedResponse["response"]["message"] = "Request has been cancelled.";
        //   break;
        case "NETWORK_ERROR":
            mutatedResponse["response"]["message"] = "Network not available";
            break;
        case "SERVER_ERROR":
            mutatedResponse["response"]["message"] = "Something went wrong";
            break;
        case "TIMEOUT_ERROR":
            mutatedResponse["response"]["message"] = "Server didn't respond in time";
            break;
        default:
            break;
    }
    // const data = utilService.getValue(response.data, "Data", response.data);
    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
        let msg = mutatedResponse["response"]["message"] ?? "You are not authorized to perform this action";
        mutatedResponse["response"]["message"] = msg;
        // logoutUser();
        // notificationService.error(msg);
        // LocalStorageService.remove(STORAGE_KEY.USER_INFO);
        // utilService.redirectToLogin();
    }
    if (response.status === HTTP_STATUS.SERVER_ERROR) {
        //Error message
        // toastService.fail(mutatedResponse["response"]["message"]);
    }

    if (response.ok) {
        return mutatedResponse;
    }

    return mutatedResponse;
}

apiSauceInstance.addAsyncRequestTransform(async (request) => {
    // TODO: Token will be sent with API once the Authentication module will be integrated.
    // request.headers["Authorization"] = "a7748c84-6ece-4253-bfd4-76c1826f4722";
    request.headers["Authorization"] = "Bearer key4v56MUqVr9sNJv";
    // request.headers["Access-Control-Allow-Origin"] = "*";
});

export default {
    get,
    post,
    patch,
    put,
    delete: deleteReq
};
