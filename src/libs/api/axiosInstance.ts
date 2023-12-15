import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://port-0-gsmatch-back-f02w2almh8gdgs.sel5.cloudtype.app",
});

export default axiosInstance;
