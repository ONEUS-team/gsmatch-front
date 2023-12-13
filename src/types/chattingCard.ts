import { CharacterType, Grade, Major } from "./utilType";

export interface ChattingCard {
  id: number;
  roomName: string;
  partner: {
    id: number;
    name: string;
    major: Major;
    grade: Grade;
    type: CharacterType;
  };
}
