import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import styles from '@/styles/detail.module.scss';
import { useState } from 'react';
import useSWR from 'swr';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

const DetailSection = () => {
  const { data: currentStore } = useSWR(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  const handleExpandedClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`${styles.detailSection} ${currentStore && styles.selected} ${
        expanded && styles.expanded
      }`}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={handleExpandedClick}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};

export default DetailSection;
