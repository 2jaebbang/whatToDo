export interface ICamp {
  id: number;
  type: "인기" | "할인";
  status: "모집전" | "모집중" | "모집완료";
  category?: string;
  skill?: string;
  campName: string;
  thumbnail: string;
  dateStart: string;
}

export interface ICommunity {
  id: number;
  category: "취업고민";
  title: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  id: number;
  nickName: string;
  content: string;
}
