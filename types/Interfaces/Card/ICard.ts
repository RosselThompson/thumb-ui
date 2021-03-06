import { DesignType } from 'types/Types/Design';
import { Sizes } from 'types/Types/Sizes';
import { ThumbsType } from 'types/Types/Thumbs';

export interface IVote {
  positive: number;
  negative: number;
}
export interface ICardProps {
  id: number;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: IVote;
  isVotePosted: boolean;
  isLoading: boolean;
  onClick: (id: number, value: ThumbsType | undefined) => void;
  design?: DesignType;
  size?: Sizes;
}
