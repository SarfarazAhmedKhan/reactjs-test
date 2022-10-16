import moment from "moment";

const convertIntoUnix = (date) => {
    return moment(date).local().unix();
};

const convertFromUnix = (date, format = "MM/DD/YYYY", fromCurrentTime) => {
    if (fromCurrentTime) {
        return moment.unix(date).fromNow();
    }
    return moment.unix(date).format(format);
};

const convertDateTime = (date, format, fromCurrentTime) => {
    if (fromCurrentTime && format) {
        return moment(date, format).fromNow();
    }
    if (fromCurrentTime) {
        return moment(date).fromNow();
    }
    return moment(date).format(format);
};

const getLocal = (format) => {
    return moment().local().format(format);
};

const getFromToday = (format, number, identifier) => {
    return moment().local().subtract(number, identifier).format(format);
};

function isAfter(date1, date2) {
    return moment(date1).isAfter(date2);
}

export { convertIntoUnix, convertFromUnix, convertDateTime, getLocal, isAfter, getFromToday };
