

import axios from "axios";
import i18n from "../i18next";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BURL}`,
  headers: {
    "Accept-language":"en"
  },
});

export default axiosInstance;