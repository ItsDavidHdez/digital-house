import moment from "moment";
import "moment/locale/es";

export const useGetDateFormatted = (date) => {
  const dateTime = date;
  return moment(dateTime).format("LL");
};
