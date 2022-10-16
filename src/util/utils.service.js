import * as FileSaver from "file-saver";
import get from "lodash.get";
import cloneDeep from "lodash/cloneDeep";
import * as lodashIsEmpty from "lodash.isempty";
import { LOGOUT_KEYS } from "../constants/constant";
import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from "../routes/constant";
import LocalStorageService from "./local-storage.service";

const utilService = {
    getLoginUrl,
    defaultUrl: AUTHENTICATED_ROUTES.DASHBOARD,
    baseUrl: process.env.REACT_APP_BASE_URL,
    apiUrl: process.env.REACT_APP_API_URL,
    graphqlApiUrl: process.env.REACT_APP_GRAPHQL,
    toNumber,
    getValue,
    redirectToLogin,
    redirectTo,
    redirectToReturnUrl,
    getUrlParameterByName,
    isEmpty,
    getQueryParams,
    getUrlParam,
    replaceNullWithPlaceholder,
    toPercentage,
    exportToFile,
    toUsPhoneNumber,
    toDollar,
    currencyFormat,
    getRoute,
    getMinutesFromTZ,
    removeNumberMasking,
    capitalizedString,
    getKeyByValue,
    removeLocalStorageRedirectLogin,
    createDynamicUrl,
    createURL,
    toDeepCopy,
};

function toDeepCopy(obj) {
    return cloneDeep(obj);
}

function createDynamicUrl(dynamicUrl, object) {
    for (const key in object) {
        if (object[key]?.length > 0 && key == "topicIds") {
            let value = ``;
            for (const key2 in object[key]) {
                if (key2 != object[key].length - 1) {
                    value += `${object[key][key2]}&${key}=`;
                } else {
                    value += `${object[key][key2]}`;
                }
            }
            dynamicUrl = dynamicUrl.replace(`{${key}}`, value);
        } else {
            dynamicUrl = dynamicUrl.replace(`{${key}}`, object[key]);
        }
    }
    return dynamicUrl;
}

function removeLocalStorageRedirectLogin() {
    for (let key of LOGOUT_KEYS) {
        LocalStorageService.remove(key);
    }
    redirectToLogin();
}
function getLoginUrl() {
    return UNAUTHENTICATED_ROUTES.LOGIN;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}

function capitalizedString(value, placeholder = "--") {
    if (!value) {
        return placeholder;
    }
    let valueArray = value.split(" ");
    valueArray = valueArray.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return valueArray.join(" ");
}

function removeNumberMasking(number) {
    if (!number) return number;
    return ("" + number).replace(/\D/g, "");
}
function getMinutesFromTZ(timeZone) {
    if (timeZone == undefined) {
        return 0;
    }
    const timeZoneMinutes = timeZone.minutes ? timeZone.minutes : 0;
    const minutes = timeZone.hours * 60 + timeZoneMinutes;
    return minutes;
}

function toDollar(number) {
    let formattedValue;
    var negativeSignFlag = false;
    if (!number) return "$0.00";
    if (number < 0) {
        negativeSignFlag = true;
    }

    formattedValue = currencyFormat(Math.abs(number), 2, 3, ",", ".");
    if (negativeSignFlag) return "$ -" + formattedValue;
    else return "$" + formattedValue;
}

function currencyFormat(number, n, x, s, c) {
    const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? "\\D" : "$"})`;
    const num = number.toFixed(Math.max(0, ~~n));

    return (c ? num.replace(".", c) : num).replace(new RegExp(re, "g"), `$&${s || ","}`);
}

function exportToFile(data, fileName, type) {
    var fileMeta = fileExtensions[type];
    const response = new Blob([data], { type: fileMeta.type });
    FileSaver.saveAs(response, fileName + fileMeta.extension);
}

function toPercentage(number) {
    if (number) return `${number}%`;
    return "--";
}

function toUsPhoneNumber(number, extension = "") {
    if (isNaN(number)) {
        return number;
    }
    let num = ("" + number).replace(/\D/g, "");
    let output;
    if (num.length > 10) {
        output = number;
    } else {
        let m = num.match(/^(\d{3})(\d{3})(\d{1,4})$/);
        output = !m ? num : "(" + m[1] + ") " + m[2] + "-" + m[3];
    }
    return extension ? output + ", Ext. " + ("" + extension).replace(/\D/g, "") : output;
}

function replaceNullWithPlaceholder(value, placeHolder = "N/A") {
    if (!value) {
        return placeHolder;
    }
    return value;
}

function getValue(...param) {
    return get(...param);
}

function redirectToLogin(loginUrl = getLoginUrl()) {
    let returnUrl = encodeURIComponent(window.location.pathname.replace(/[//]+/, "") + window.location.search);
    utilService.redirectTo(loginUrl + "?returnUrl=" + returnUrl);
}

function redirectTo(url) {
    window.location.href = utilService.baseUrl + url;
}

function redirectToReturnUrl() {
    utilService.redirectTo(
        utilService.getUrlParameterByName("returnUrl")
            ? "/" + utilService.getUrlParameterByName("returnUrl")
            : utilService.defaultUrl
    );
}

function getUrlParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regexS = `[\\?&]${name}=([^&#]*)`;
    const regex = new RegExp(regexS);
    const results = regex.exec(window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isEmpty(value) {
    return lodashIsEmpty(value);
}

function numberFormat(number, n, x, s, c) {
    const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? "\\D" : "$"})`;
    const num = number.toFixed(Math.max(0, ~~n));

    return (c ? num.replace(".", c) : num).replace(new RegExp(re, "g"), `$&${s || ","}`);
}

function toNumber(input, decimal = 2) {
    if (input && !isNaN(input)) {
        return numberFormat(input, decimal, 3);
    }
    return input;
}

function getQueryParams(query, param) {
    let params = new URLSearchParams(query);
    return params.get(param);
}

function getUrlParam(urlParam, search) {
    return new URLSearchParams(urlParam).get(search);
}

const fileExtensions = {
    excel: {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extension: ".xlsx"
    },
    csv: {
        type: "text/csv",
        extension: ".csv"
    }
};

function getRoute(route, obj = {}) {
    if (Object.keys(obj).length) {
        let objectKeys = Object.keys(obj);
        objectKeys.forEach((item) => {
            route = route.replace(new RegExp(/:([\d\w])+/, "i"), (match) => {
                let formattedMatchedValue = match.slice(1);
                return obj[formattedMatchedValue];
            });
        });
        return route;
    }
    return route;
}
function createURL(str) {
    const index = str.toUpperCase().indexOf("HTTP");
    if (index == -1) {
        return `http://${str}`;
    }
    return str;
}

export default utilService;
