import styles from './SpecealizetionBtn.module.css';
import { ButtonFilter } from '@/shared/ui';
import { useGetSpecializationsQuery } from '@/features/question-sidebar';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { sidebarActions } from '@/features/question-sidebar';
import { useState } from 'react';

const SpecealizetionBtn = () => {
  const [isHiddenSpec, setIsHiddenSpec] = useState(false);
  const { specializationsId } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();
  const { data: specializations } = useGetSpecializationsQuery({});

  return (
    <div className={styles.Wrapper}>
      <p>Специализация</p>
      <div className={`${styles.specList} ${isHiddenSpec ? '' : styles.specHide}`}>
        {specializations?.data.map((spec) => (
          <ButtonFilter
            key={spec.id}
            onClick={() => {
              dispatch(sidebarActions.setSpecializations(spec.id));
              dispatch(sidebarActions.setSpecTitle(spec.title));
            }}
            isActive={spec.id === specializationsId}
            imgSrc={spec.imageSrc}
          >
            {spec.title}
          </ButtonFilter>
        ))}
      </div>
      <button className={styles.moreButton} onClick={() => setIsHiddenSpec((prev) => !prev)}>
        {!isHiddenSpec ? 'Показать все' : 'Скрыть'}
      </button>
    </div>
  );
};

export default SpecealizetionBtn;
