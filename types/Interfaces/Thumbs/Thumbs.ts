import { ThumbsType } from 'types/Types/Thumbs';

export interface IThumbsProps {
  type: ThumbsType;
  isButton?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}
