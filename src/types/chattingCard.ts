export interface ChattingCard {
  id: number;
  roomName: string;
  partner: {
    id: number;
    name: string;
    major: string;
    grade: string;
    type: string;
  };
}
