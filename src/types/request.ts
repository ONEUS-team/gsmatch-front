import { CharacterType, Gender, Grade, Major, RequestType } from "./utilType";

export type requestType = "major" | "genre";
export type requestGrade = "1" | "2" | "3" | "모두";
export type requestGender = "남자" | "여자" | "모두";
export type requestMajor =
  | "프론트엔드"
  | "백엔드"
  | "디자이너"
  | "IOS"
  | "안드로이드"
  | "DevOps"
  | "기능반"
  | "IOT"
  | "AI";

export interface MyRequest {
  requestId: number;
  title: string;
  content: string;
  requestType: string;
  authorName: string;
  image: string;
}

export interface DetailType {
  id: number;
  title: string;
  content: string;
  imageNames: string[];
  requestType: RequestType;
  isOnlyOne: boolean;
  author: {
    id: number;
    name: string;
    major: Major;
    type: CharacterType;
    level: number;
    grade: Grade;
  };
}

export interface MyInfo {
  id: number;
  username: string;
  grade: Grade;
  level: number;
  gender: Gender;
  type: CharacterType;
  point: number;
  major: Major;
}
