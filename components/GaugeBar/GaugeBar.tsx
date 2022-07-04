import Image from 'next/image';
import { IGaugeBarProps } from 'types/Interfaces/GaugeBar/IGaugeBar';
import { getPercentage } from 'utils/Percentage';

export const GaugeBar: React.FC<IGaugeBarProps> = (props): JSX.Element => {
  const { positive, negative } = props;
  const [positiveValue, negativeValue] = getPercentage(positive, negative);
  return (
    <div className="gaugebar">
      <div className="gaugebar__positive" style={{ width: positiveValue }}>
        <Image
          src="/images/thumbs-up.svg"
          alt="thumbs-up"
          width="15px"
          height="15px"
        />
        <p className="gaugebar__text ml-1.5">{positiveValue}</p>
      </div>
      <div className="gaugebar__negative">
        <p className="gaugebar__text mr-1.5">{negativeValue}</p>
        <Image
          src="/images/thumbs-down.svg"
          alt="thumbs-down"
          width="15px"
          height="15px"
        />
      </div>
    </div>
  );
};
