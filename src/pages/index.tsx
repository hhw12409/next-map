import styles from '@/styles/header.module.scss';
import Header from '@/components/common/Header';
import { VscFeedback } from 'react-icons/vsc';
import { AiOutlineShareAlt } from 'react-icons/ai';
import Link from 'next/link';
import MapSection from '@/components/home/MapSection';

export default function Home() {
  return (
    <>
      <Header
        rightElements={[
          <button
            className={styles.box}
            onClick={() => {
              alert('복사');
            }}
            key="button"
            style={{ marginRight: 8 }}
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/feedback" className={styles.box} key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  // TODO: next api routes로 불러오기
  const stores = (await import('../../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
