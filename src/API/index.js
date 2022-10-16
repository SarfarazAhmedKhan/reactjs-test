import ApiService from "../services/apiService";
import notificationService from "../services/notification.service";

// TODO: Handle unhandled prmomise rejection on failure
export async function request({
    url, //Service url
    method, //Web Service type 'post,get,put,delete....'
    params, //Paramter for request
    config, //APIrequest Configuration
    showLoader = true, //Show spinner
    showToast = true
}) {
    const response = (await ApiService[method]?.(url, params, config)) || {};
    if (response.ok) {
        return response;
    } else {
        showToast && notificationService.error(response?.response.message);
        throw new Error(response?.response?.message);
    }
}
