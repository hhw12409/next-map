import styles from '@/styles/header.module.scss';
import Header from '@/components/common/Header';
import { VscFeedback } from 'react-icons/vsc';
import { AiOutlineShareAlt } from 'react-icons/ai';
import Link from 'next/link';
import MapSection from '@/components/home/MapSection';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import useStores from '@/hooks/useStores';
import { useEffect } from 'react';
import HomeHeader from '@/components/home/HomeHeader';
import DetailSection from '@/components/home/DetailSection';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }: Props) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <HomeHeader />
      <main style={{ position: 'relative', width: '100%', height: '100%' }}>
        <MapSection />
        <DetailSection />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  // TODO: next api routes로 불러오기
  const stores = (await import('../../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
};
