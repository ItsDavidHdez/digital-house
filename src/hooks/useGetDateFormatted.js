import moment from "moment";

export const useGetDateFormatted = (date, lang) => {
  moment.locale(lang);
  const dateTime = date;
  return moment(dateTime).format("LL");
};
