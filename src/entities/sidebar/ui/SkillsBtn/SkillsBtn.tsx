import styles from './SkillsBtn.module.css';
import { ButtonFilter } from '@/shared/ui';
import { useGetSkillsQuery } from '@/features/question-sidebar';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { sidebarActions } from '@/features/question-sidebar';
import { useState } from 'react';

const SkillsBtn = () => {
  const [isHiddenSkills, setIsHiddenSkills] = useState(false);
  const { skillsId, specializationsId } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();
  const { data: skills } = useGetSkillsQuery({
    specializations: specializationsId,
  });

  return (
    <div className={styles.Wrapper}>
      <p>Навыки</p>
      <div className={`${styles.specList} ${isHiddenSkills ? '' : styles.skillHide}`}>
        {skills?.data.map((skill) => (
          <ButtonFilter
            key={skill.id}
            onClick={() => dispatch(sidebarActions.setSkills(skill.id))}
            isActive={skillsId.includes(skill.id.toString())}
            imgSrc={skill.imageSrc}
          >
            {skill.title}
          </ButtonFilter>
        ))}
      </div>
      <button className={styles.moreButton} onClick={() => setIsHiddenSkills((prev) => !prev)}>
        {!isHiddenSkills ? 'Показать все' : 'Скрыть'}
      </button>
    </div>
  );
};

export default SkillsBtn;
