import React from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import Image from 'next/image';

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

const Header = ({ rightElements, onClickLogo }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box} onClick={onClickLogo}>
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
