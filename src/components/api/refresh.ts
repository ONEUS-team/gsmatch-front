import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export const refresh = (
  navigate: NavigateFunction,
  callBack: null | (() => void)
) => {
  axios
    .get(
      "https://port-0-gsmatch-back-f02w2almh8gdgs.sel5.cloudtype.app/refresh",
      {
        headers: {
          Authorization: `Bearer${localStorage.getItem("Authorization")}`,
          "Refresh-Token": `Bearer${localStorage.getItem("Refresh-Token")}`,
        },
        withCredentials: true,
      }
    )
    .then((response) => {
      localStorage.setItem(
        "Access-Token",
        response.headers.authorization.replace("Bearer", "")
      );
      if (callBack != null) callBack();
    })
    .catch(() => {
      localStorage.clear();
      navigate("/login");
    });
};
