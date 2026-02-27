import styles from './RateBtn.module.css';
import { ButtonFilter } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { sidebarActions } from '@/features/question-sidebar';
import { RETING } from '@/shared/constant/constant';

const RateBtn = () => {
  const { rate } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.Wrapper}>
      <p>Рейтинг</p>
      <div className={styles.specList}>
        {RETING.map((rating) => (
          <ButtonFilter
            key={rating}
            onClick={() => dispatch(sidebarActions.setRate(rating))}
            isActive={rate.includes(rating)}
            imgSrc={''}
          >
            {rating}
          </ButtonFilter>
        ))}
      </div>
    </div>
  );
};

export default RateBtn;
