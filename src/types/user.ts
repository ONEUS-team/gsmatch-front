import { MyRequest } from "./request";

export interface UserInfo {
  id: number | null;
  username: string | null;
  grade: "ONE" | "TWO" | "THREE" | null;
  level: number | null;
  gender: string | null;
  type: string | null;
  point: number | null;
  major: string | null;
  requestList: MyRequest[] | [];
}
