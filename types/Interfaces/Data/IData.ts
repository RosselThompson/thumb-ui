import { ThumbsType } from 'types/Types/Thumbs';

export interface IPersonInfo {
  id: number;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  isVotePosted: boolean;
  votes: {
    positive: number;
    negative: number;
  };
}

export interface IVoteInfo {
  id: number;
  value: ThumbsType | undefined;
}
