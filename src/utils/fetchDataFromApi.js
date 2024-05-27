import axios from "axios";
import { config } from "../conf/config";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${config.weatherApiUrl}key=${config.weatherApiKey}&${url}&days=7`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
