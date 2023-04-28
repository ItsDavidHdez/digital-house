import { API_URL } from "../utils/constants";

export const useGetData = async () => {
  const data = await fetch(API_URL);
  const result = await data.json();
  return result;
};
