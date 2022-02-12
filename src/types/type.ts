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

export interface ICampDetail {
  id: number;
  name: string;
  tags: string[];
  desc: string;
  seat: string;
  reviewMaterial: string[];
  headerImaget: string;
  images: string[];
  process: string;
  type: CampType;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
  reviews: { content: string; reviewer: string }[];
  faqs: { question: string; answer: string; isToggle: boolean }[];
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
  nickname: string;
  profile: string;
  content: string;
}
