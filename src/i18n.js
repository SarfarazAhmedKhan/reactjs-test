import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import dateTimeService from "./util/date-time.service";

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(HttpApi)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en-US",
    fallbackLng: "en-US",
    debug: process.env.NODE_ENV === "development",

    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, rawFormat, lng) => {
        const [format, ...additionalValues] = rawFormat
          .split(",")
          .map((v) => v.trim());
        switch (format) {
          case "price":
            return Intl.NumberFormat(lng, {
              style: "currency",
              currency: additionalValues[0],
            }).format(value);
          case "number":
            return Intl.NumberFormat(lng).format(value);
          case "date":
            return dateTimeService.formatDate(value, additionalValues[0]);
        }
      },
    },
  });

export default i18n;
