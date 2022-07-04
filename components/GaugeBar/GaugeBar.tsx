import Image from 'next/image';
import { IGaugeBarProps } from 'types/Interfaces/GaugeBar/IGaugeBar';
import { getPercentage } from 'utils/Percentage';

export const GaugeBar: React.FC<IGaugeBarProps> = (props): JSX.Element => {
  const { positive, negative, size = 'sm' } = props;
  const [positiveValue, negativeValue] = getPercentage(positive, negative);
  return (
    <div className={size === 'lg' ? 'gaugebar-lg' : 'gaugebar'}>
      <div className="gaugebar__positive" style={{ width: positiveValue }}>
        <Image
          src="/images/thumbs-up.svg"
          alt="thumbs-up"
          width={size === 'lg' ? '22.5px' : '15px'}
          height={size === 'lg' ? '22.5px' : '15px'}
        />
        <p
          className={`${
            size === 'lg' ? 'gaugebar__text-lg' : 'gaugebar__text'
          } ml-1.5`}>
          {positiveValue}
        </p>
      </div>
      <div className="gaugebar__negative">
        <p
          className={`${
            size === 'lg' ? 'gaugebar__text-lg' : 'gaugebar__text'
          } ml-1.5`}>
          {negativeValue}
        </p>
        <Image
          src="/images/thumbs-down.svg"
          alt="thumbs-down"
          width={size === 'lg' ? '22.5px' : '15px'}
          height={size === 'lg' ? '22.5px' : '15px'}
        />
      </div>
    </div>
  );
};
