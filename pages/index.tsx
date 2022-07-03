import type { NextPage } from 'next';
import { Layout } from 'components/Layout/Layout';
import { Button } from '../components/Button/Button';

const Home: NextPage = () => {
  return (
    <Layout>
      <Button text="Vote now" />
    </Layout>
  );
};

export default Home;
