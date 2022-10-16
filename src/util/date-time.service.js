import React from "react";
import moment from "moment";
import momentTimezone from "moment-timezone";
import "moment/min/locales";
import { API_STORAGE_KEY } from "./../constants/constant";
import utilService from "./utils.service";
import { queryClient } from "../NextApp";
import { DASHBOARD_DATE_TYPE } from "../constants/constantTypes";

export const DATE_TIME_FORMAT = {
    US_DATE_FORMAT_SLASH: "MM/DD/YYYY",
    FORMAT: "YYYY-MM-DD",
    LONG_DATE_FORMAT: "YYYY-MM-DD HH:mm:ss",
    US_DATE_FORMAT: "MM-DD-YYYY",
    DATE_FORMAT: "MM-DD-YYYY",
    TIME: "hh:mm A",
    US_DATE_TIME_FORMAT: "MM/DD/YY - h:mm A",
    YEAR: "YYYY",
    FORMAT_TIME_ZONE: "YYYY-MM-DDTHH:mm:ss.SSZ",
    AM_PM_FORMAT: "hh:mm a"
};

const timeZone = "America/Chicago";

export function getLocalTime(date, format = DATE_TIME_FORMAT.AM_PM_FORMAT) {
    return moment.utc(date).local().format(format);
}

export function getFormateLocalTimeZone(date, format = DATE_TIME_FORMAT.US_DATE_FORMAT) {
    if (date) return moment.utc(date).local().format(format);
    return undefined;
}

export const changeFormat = (string, requiredFormat = DATE_TIME_FORMAT.FORMAT) => {
    if (!string) {
        return null;
    }
    return moment.utc(string).local().format(requiredFormat);
};

export const changeFormatV2 = (string, requiredFormat = DATE_TIME_FORMAT.FORMAT) => {
    if (!string) {
        return null;
    }
    return moment(string).format(requiredFormat);
};

export const getDateTimeCST = (date, time, offset) => {
    if (!offset) {
        const userDetails = queryClient.getQueryData(API_STORAGE_KEY.USER_DETAILS);
        offset = userDetails?.timezone && utilService.getMinutesFromTZ(userDetails?.timezone);
    }
    const dateObject = moment.utc(`${date} ${time}`, `${DATE_TIME_FORMAT.FORMAT} ${DATE_TIME_FORMAT.TIME}`);
    return dateObject.clone().utcOffset(-offset).format("yyyy-MM-DD[T]HH:mm:SS");
};

export const getDateTimeUTC = (date, time) => {
    if (time == null) {
        time = "11:59 pm";
    }
    const dateObject = moment(time, 'hh:mm a').toObject();
    return moment(date)
        .set({
            hours: dateObject.hours,
            minutes: dateObject.minutes
        })
        .format();
    const convertedTime = moment(time, "hh:mm a").format("HH:mm");
    let dateAndTime = moment(`${date} ${convertedTime}`).utc().format();

    return dateAndTime;
};

export const getDateDifference = (date, offset) => {
    if (!offset) {
        const userDetails = queryClient.getQueryData(API_STORAGE_KEY.USER_DETAILS);
        offset = userDetails?.timezone && utilService.getMinutesFromTZ(userDetails?.timezone);
    }
    const dateObject = moment.utc(date).utcOffset(offset);
    let hours = dateObject.format("hh:mm a");
    let monthdate = dateObject.format(DATE_TIME_FORMAT.US_DATE_FORMAT_SLASH);
    var current = moment().startOf("day");
    let days = moment.duration(current.diff(dateObject)).asDays();
    let result = "";
    if (days <= 1) {
        return (result = `${"Today"}, ` + `${hours}`);
    }
    if (days > 1 && days < 2) {
        return (result = `${"Yesterday"}, ` + `${hours}`);
    }
    return result + `${monthdate}, ` + `${hours}`;
};

export const getDateFilter = (id) => {
    const date = { toDate: moment().format(), fromDate: null };
    if (DASHBOARD_DATE_TYPE.ALL_TIME == id || id == undefined) {
        return { ...date, toDate: null };
    } else if (DASHBOARD_DATE_TYPE.WEEKLY == id) {
        return { ...date, fromDate: moment().subtract(1, "w").format() };
    } else if (DASHBOARD_DATE_TYPE.MONTHLY == id) {
        return { ...date, fromDate: moment().subtract(1, "M").format() };
    }
};

export const getCSTDateDifference = (date, format = DATE_TIME_FORMAT.US_DATE_FORMAT_SLASH, offset) => {
    if (!offset) {
        const userDetails = queryClient.getQueryData(API_STORAGE_KEY.USER_DETAILS);
        offset = userDetails?.timezone && utilService.getMinutesFromTZ(userDetails?.timezone);
    }
    const dateObject = moment.utc(date).utcOffset(offset);
    let hours = dateObject.format("hh:mm a");
    let monthDate = dateObject.format(format);
    var current = moment().utcOffset(offset).startOf("day");
    let days = moment.duration(current.diff(dateObject)).asDays();
    let result = "";
    if (days <= 1) {
        return (result = `${"Today"}, ${hours}`);
    }
    if (days > 1 && days < 2) {
        return (result = `${"Yesterday"}, ${hours}`);
    }
    return `${result}${monthDate} - ${hours} CST`;
};

export function formatDateToSpecificTZ(date, format = "MM/DD/YYYY", offset) {
    if (!date) {
        return null;
    }
    if (!offset) {
        const userDetails = queryClient.getQueryData(API_STORAGE_KEY.USER_DETAILS);
        offset = userDetails?.timezone && utilService.getMinutesFromTZ(userDetails?.timezone);
    }
    return moment.utc(date).utcOffset(offset).format(format);
}

export function DateToSpecificTZ(date, offset) {
    if (!date) {
        return null;
    }
    if (!offset) {
        const userDetails = queryClient.getQueryData(API_STORAGE_KEY.USER_DETAILS);
        offset = userDetails?.timezone && utilService.getMinutesFromTZ(userDetails?.timezone);
    }
    const currentOffset = moment().utcOffset();
    return moment.utc(date).local().subtract(currentOffset, 'minutes').add('minutes', offset)
}

export function DateToSpecificTZFormated(date, offset) {
    if (!date) {
        return null;
    }
    if (!offset) {
        const userDetails = queryClient.getQueryData(API_STORAGE_KEY.USER_DETAILS);
        offset = userDetails?.timezone && utilService.getMinutesFromTZ(userDetails?.timezone);
    }
    return moment.utc(date).format();
}

function formatDateUtc(date, format = "MM/DD/YYYY") {
    if (!date) {
        return null;
    }
    const offset = momentTimezone(date).tz(timeZone).format("Z");
    return momentTimezone.utc(date).utcOffset(offset).format(format);
}

function isAfter(date1, date2) {
    return moment(date1).isAfter(date2);
}

const dateTimeService = {
    formatDateUtc,
    isAfter,
    DateToSpecificTZ,
    DateToSpecificTZFormated,
    formatDateToSpecificTZ,
    DATE_TIME_FORMAT
};

export default dateTimeService;


