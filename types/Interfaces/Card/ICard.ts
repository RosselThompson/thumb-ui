import { DesignType } from 'types/Types/Design';
import { Sizes } from 'types/Types/Sizes';
import { ThumbsType } from 'types/Types/Thumbs';

interface IVote {
  positive: number;
  negative: number;
}
export interface ICardProps {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: IVote;
  isVotePosted: boolean;
  isLoading: boolean;
  onClick: (value: ThumbsType | undefined) => void;
  design?: DesignType;
  size?: Sizes;
}
