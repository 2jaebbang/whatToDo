export type CampType = "popular" | "sale";
export type CampStatus = "모집전" | "모집중" | "모집완료";
export interface ICamp {
  id: number;
  type: CampType;
  status: CampStatus;
  field?: string;
  skill?: string;
  name: string;
  thumbnail: string;
  startDate: string;
}

export interface ICommunity {
  id: number;
  tags: string[];
  title: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  id: number;
  nickName: string;
  profile: string;
  content: string;
}
