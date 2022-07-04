import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { GaugeBar } from 'components/GaugeBar/GaugeBar';
import { Thumbs } from 'components/Thumbs/Thumbs';
import { ICardProps } from 'types/Interfaces/Card/ICard';
import { ThumbsType } from 'types/Types/Thumbs';
import { capitalize } from 'utils/Capitalize';
import { getPercentage } from 'utils/Percentage';
import { getTimeStr } from 'utils/Time';

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
  } = props;

  const [votedFlag, setvotedFlag] = useState<boolean>(isVotePosted);
  const [selectedThumbs, setselectedThumbs] = useState<ThumbsType | undefined>(
    undefined
  );

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
      className="card"
      style={{
        backgroundImage: `url(/images/people/${picture})`,
      }}>
      <div className="card__filter">
        <div className="card__container">
          <div className="card__side-thumb">
            <Thumbs type={thumbsAvergage} />
          </div>
          <div className="card__content">
            <p className="card__name">{name}</p>
            <p className="card__description">{description}</p>
            <p className="card__timestamp">{timestamp}</p>
            <div className={`card__buttons ${cardButtonsClassName}`}>
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
        <div className="card__footer">
          <GaugeBar positive={votes.positive} negative={votes.negative} />
        </div>
      </div>
    </div>
  );
};
