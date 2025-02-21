import { fetchDataFromApi } from "../utils/fetchDataFromApi";

const useFetch = (url) => {
  return (url) => {
    return fetchDataFromApi(url);
  };
};

export default useFetch;
