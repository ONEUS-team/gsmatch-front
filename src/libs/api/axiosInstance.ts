import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://port-0-gsmatch-back-57lz2alpp1ckys.sel4.cloudtype.app/",
});

export default axiosInstance;
