import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export const refresh = (
  navigate: NavigateFunction,
  callBack: null
  // callBack: null | (() => void)
) => {
  axios
    .get(
      "https://port-0-gsmatch-back-f02w2almh8gdgs.sel5.cloudtype.app/refresh",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Refresh-Token": `Bearer ${localStorage.getItem("refreshToken")}`,
        },
        withCredentials: true,
      }
    )
    .then((response) => {
      localStorage.setItem(
        "accessToken",
        response.headers.authorization.replace("Bearer ", "")
      );
      // if (callBack != null)  callBack();
      return callBack;
    })
    .catch(() => {
      localStorage.clear();
      navigate("/login");
    });
};
