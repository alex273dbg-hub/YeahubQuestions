import styles from './QuestionSideBar.module.css';

import SerachInput from '@/shared/ui/SearchInput/SearchInput';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { sidebarActions } from '../model/sidebarSlice';
import { LevelsBtn, RateBtn } from '@/shared/ui';
import { SpecealizetionBtn } from '@/entities/Specealizetion';
import { SkillsBtn } from '@/entities/skills';

const QuestionSideBar = () => {
  const { searchValue } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.questionSideBar}>
      <SerachInput
        value={searchValue}
        setValue={(value) => dispatch(sidebarActions.setSearchValue(value))}
      />
      <SpecealizetionBtn />
      <SkillsBtn />
      <LevelsBtn />
      <RateBtn />
    </div>
  );
};

export default QuestionSideBar;
