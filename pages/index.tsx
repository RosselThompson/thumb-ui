import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import { Layout } from 'components/Layout/Layout';
import { Card } from 'components/Card/Card';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { Loader } from 'components/Loader/Loader';
import { fetcher } from 'services/Fetcher';
import { useDimensions } from 'hooks/useDimensions';
import { apiPeople } from 'constants/Endpoints';
import { DesignType } from 'types/Types/Design';
import { IDropdownField } from 'types/Interfaces/Dropdown/IDropdown';
import { ThumbsType } from 'types/Types/Thumbs';
import { IPersonInfo } from 'types/Interfaces/Data/IData';
import { DropdownFields } from 'constants/DropdownFields';
import { getHomeCardsClassName } from 'utils/HomeCardClass';
import { getViewportSize } from 'utils/ViewportSize';
import { updatePerson } from 'services/People';

const Home: NextPage = () => {
  const { width } = useDimensions();
  const { data, error, mutate } = useSwr<IPersonInfo[]>(apiPeople, fetcher);
  const [loadingButton, setloadingButton] = useState<string>('');
  const [design, setdesign] = useState<DesignType>('list');

  const size = getViewportSize(Number(width));
  const cardsClassName = getHomeCardsClassName(design, size);

  const onChangeDropdown = (value: IDropdownField) =>
    setdesign(value.value as DesignType);

  const updateData = (id: number, value: ThumbsType | undefined) =>
    data?.map((e) => {
      if (e.id === id && value === 'up')
        return {
          ...e,
          isVotePosted: true,
          votes: { ...e.votes, positive: e.votes.positive + 1 },
        };
      if (e.id === id && value === 'down')
        return {
          ...e,
          isVotePosted: true,
          votes: { ...e.votes, negative: e.votes.negative + 1 },
        };
      return e;
    });

  const onClickVote = async (id: number, value: ThumbsType | undefined) => {
    setloadingButton(`${id}-loading`);
    const newData = updateData(id, value);
    const person = newData?.find((e) => e.id === id);
    await updatePerson(id, person as IPersonInfo);
    mutate(newData);
    setloadingButton('');
  };

  useEffect(() => {
    if (size === 'sm') setdesign('grid');
    if (size === 'md') setdesign('list');
    if (size === 'lg') setdesign('list');
  }, [size]);

  if (error) return <div>Failed to load data</div>;

  return (
    <Layout>
      <div className={size === 'lg' ? 'home__container-lg' : 'home__container'}>
        <div className="home">
          <div className="home__header">
            <p className="home__title">Previous Rulings</p>
            <div className="home__dropdown">
              {size !== 'sm' && (
                <Dropdown fields={DropdownFields} onChange={onChangeDropdown} />
              )}
            </div>
          </div>
          {!data ? (
            <div className="home__loader">
              <Loader theme="light" size="md" />
            </div>
          ) : (
            <div className={cardsClassName}>
              {data?.map((element) => (
                <React.Fragment key={`card-${element.id}`}>
                  <Card
                    id={element.id}
                    name={element.name}
                    description={element.description}
                    category={element.category}
                    picture={element.picture}
                    lastUpdated={element.lastUpdated}
                    votes={element.votes}
                    isLoading={loadingButton === `${element.id}-loading`}
                    isVotePosted={element.isVotePosted}
                    onClick={onClickVote}
                    design={design}
                    size={size}
                  />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
