import styles from './LevelsBtn.module.css';
import { ButtonFilter } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { sidebarActions } from '@/features/question-sidebar';
import { LEVELS } from '@/shared/constant/constant';

const LevelsBtn = () => {
  const { levelSelected } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.Wrapper}>
      <p>Уровень сложности</p>
      <div className={styles.specList}>
        {LEVELS.map((l) => (
          <ButtonFilter
            key={l}
            onClick={() => dispatch(sidebarActions.setLevels(l))}
            isActive={levelSelected.includes(l)}
            imgSrc={''}
          >
            {l}
          </ButtonFilter>
        ))}
      </div>
    </div>
  );
};

export default LevelsBtn;
