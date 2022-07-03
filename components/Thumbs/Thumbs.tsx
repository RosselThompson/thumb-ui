import Image from 'next/image';
import { IThumbsProps } from 'types/Interfaces/Thumbs/Thumbs';

export const Thumbs: React.FC<IThumbsProps> = (props): JSX.Element => {
  const { type, isButton, isSelected, onClick } = props;
  const typeClassName = type === 'up' ? 'thumbs__up' : 'thumbs__down';
  const isButtonClassName = isButton ? 'thumbs__button' : '';
  const isSelectedClassName = isSelected ? 'thumbs__button__selected' : '';
  const iconURL = `/images/${type === 'up' ? 'thumbs-up' : 'thumbs-down'}.svg`;
  const iconAlt = type === 'up' ? 'thumbs_up' : 'thumbs_down';
  return (
    <div
      data-testid="test-thumbs"
      className={`thumbs ${typeClassName} ${isButtonClassName} ${isSelectedClassName}`}
      onClick={onClick}>
      <Image src={iconURL} alt={iconAlt} width={16} height={16} />
    </div>
  );
};
