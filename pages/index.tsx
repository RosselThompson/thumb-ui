import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from 'components/Layout/Layout';
import { Card } from 'components/Card/Card';
import { useDimensions } from 'hooks/useDimensions';
import { getViewportSize } from 'utils/ViewportSize';
import { DesignType } from '../types/Types/Design';
import { getHomeCardsClassName } from 'utils/HomeCardClass';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { DropdownFields } from 'constants/DropdownFields';
import { IDropdownField } from 'types/Interfaces/Dropdown/IDropdown';
import { ThumbsType } from 'types/Types/Thumbs';
import { useLoadPage } from 'hooks/useLoadPage';
import { Loader } from '../components/Loader/Loader';

const Home: NextPage = () => {
  const { width } = useDimensions();
  const { data, isLoading } = useLoadPage();
  const [design, setdesign] = useState<DesignType>('list');

  const size = getViewportSize(Number(width));
  const cardsClassName = getHomeCardsClassName(design, size);

  const onChangeDropdown = (value: IDropdownField) =>
    setdesign(value.value as DesignType);

  const onClickVote = (id: number, value: ThumbsType | undefined) =>
    console.log(id, value);

  useEffect(() => {
    if (size === 'sm') setdesign('grid');
    if (size === 'md') setdesign('list');
    if (size === 'lg') setdesign('list');
  }, [size]);

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
          {isLoading ? (
            <div className="home__loader">
              <Loader theme="light" size="md" />
            </div>
          ) : (
            <div className={cardsClassName}>
              {data.map((element) => (
                <React.Fragment key={`card-${element.id}`}>
                  <Card
                    id={element.id}
                    name={element.name}
                    description={element.description}
                    category={element.category}
                    picture={element.picture}
                    lastUpdated={element.lastUpdated}
                    votes={element.votes}
                    isLoading={false}
                    isVotePosted={false}
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
