import { NavigateFunction } from "react-router-dom";
import axiosInstance from "../../libs/api/axiosInstance";

export const refresh = (navigate: NavigateFunction, callBack: any) => {
  axiosInstance
    .get("/refresh", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Refresh-Token": `Bearer ${localStorage.getItem("refreshToken")}`,
      },
      withCredentials: true,
    })
    .then((response) => {
      localStorage.setItem(
        "accessToken",
        response.headers.authorization.replace("Bearer ", "")
      );
      if (callBack != null) callBack();
    })
    .catch(() => {
      localStorage.clear();
      navigate("/login");
    });
};
