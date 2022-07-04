import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { GaugeBar } from 'components/GaugeBar/GaugeBar';
import { Thumbs } from 'components/Thumbs/Thumbs';
import { ICardProps } from 'types/Interfaces/Card/ICard';
import { ThumbsType } from 'types/Types/Thumbs';
import { capitalize } from 'utils/Capitalize';
import { getPercentage } from 'utils/Percentage';
import { getTimeStr } from 'utils/Time';
import { getPrefixClassName } from 'utils/CardPrefix';
import { getImageName } from 'utils/FileName';

export const Card: React.FC<ICardProps> = (props): JSX.Element => {
  const {
    name,
    description,
    category,
    picture,
    lastUpdated,
    votes,
    isVotePosted,
    isLoading,
    onClick,
    design = 'grid',
    size = 'sm',
  } = props;

  const [votedFlag, setvotedFlag] = useState<boolean>(isVotePosted);
  const [selectedThumbs, setselectedThumbs] = useState<ThumbsType | undefined>(
    undefined
  );

  const prefixClassName = getPrefixClassName(design, size);
  const picName = `url(/images/people/${getImageName(picture)}${
    size === 'lg' || size === 'md' ? '@2x' : ''
  }.png)`;
  const cardButtonsClassName = votedFlag ? 'justify-end' : 'justify-between';

  const voteText = votedFlag ? 'Vote again' : 'Vote Now';
  const isDisabledVote = !votedFlag && typeof selectedThumbs === 'undefined';

  const isSelectedThumbUp = selectedThumbs === 'up';
  const isSelectedThumbDown = selectedThumbs === 'down';

  const [positivePercentage, negativePercentage] = getPercentage(
    votes.positive,
    votes.negative
  );

  const thumbsAvergage: ThumbsType =
    positivePercentage > negativePercentage ? 'up' : 'down';

  const timeStr = getTimeStr(new Date(lastUpdated));
  const timestamp = votedFlag
    ? 'Thank you for your vote!'
    : `${timeStr} ${capitalize(category)}`;

  const toogleVotedFlag = () => setvotedFlag(!votedFlag);

  const onClickThumbsUp = () => setselectedThumbs('up');
  const onClickThumbsDown = () => setselectedThumbs('down');
  const onClickVoteButton = () => {
    if (votedFlag) {
      toogleVotedFlag();
    } else {
      onClick(selectedThumbs);
    }
  };

  return (
    <div
      className={prefixClassName}
      style={{
        backgroundImage: picName,
      }}>
      <div className={`${prefixClassName}__filter`}>
        <div className={`${prefixClassName}__container`}>
          <div className={`${prefixClassName}__side-thumb`}>
            <Thumbs type={thumbsAvergage} />
          </div>
          <div className={`${prefixClassName}__content`}>
            <div className={`${prefixClassName}__text`}>
              <p className={`${prefixClassName}__name`}>{name}</p>
              <p className={`${prefixClassName}__description`}>{description}</p>
            </div>
            <div className={`${prefixClassName}__buttons-container`}>
              <p className={`${prefixClassName}__timestamp`}>{timestamp}</p>
              <div
                className={`${prefixClassName}__buttons ${cardButtonsClassName}`}>
                {!votedFlag && (
                  <>
                    <Thumbs
                      type="up"
                      isButton
                      isSelected={isSelectedThumbUp}
                      onClick={onClickThumbsUp}
                    />
                    <Thumbs
                      type="down"
                      isButton
                      isSelected={isSelectedThumbDown}
                      onClick={onClickThumbsDown}
                    />
                  </>
                )}
                <Button
                  text={voteText}
                  isDisabled={isDisabledVote}
                  isLoading={isLoading}
                  onClick={onClickVoteButton}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${prefixClassName}__footer`}>
          <GaugeBar
            positive={votes.positive}
            negative={votes.negative}
            size={design === 'grid' ? 'sm' : size}
          />
        </div>
      </div>
    </div>
  );
};
