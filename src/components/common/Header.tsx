import React from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import Image from 'next/image';

interface Props {
  rightElements?: React.ReactElement[];
}

const Header = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image
            src={'https://lecture-1.vercel.app/inflearn.png'}
            alt="Logo"
            width={110}
            height={20}
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default Header;
