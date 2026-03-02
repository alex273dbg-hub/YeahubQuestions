import { ButtonFilter } from '@/shared/ui';
import styles from './QuestionInfo.module.css';
import type { GetQuestionByIdResponse } from '@/pages/question-details/model/type';

interface QuestionInfoProps {
  question: GetQuestionByIdResponse;
}

const QuestionInfo = ({ question }: QuestionInfoProps) => {
  return (
    <div className={styles.CardInfo}>
      <div className={styles.Levels}>
        <p className={styles.CardInfoName}>Уровень:</p>
        <div className={styles.LevelsContent}>
          <p>
            Cложность:
            <span>{question.complexity}</span>
          </p>
          <p>
            Рейтинг:
            <span>{question.rate}</span>
          </p>
        </div>
      </div>

      <div className={styles.Skills}>
        <p className={styles.CardInfoName}>Навыки:</p>
        <div>
          {question.questionSkills.map((skill, index) => (
            <ButtonFilter key={index} imgSrc={skill.imageSrc} isActive onClick={() => {}}>
              {skill.title}
            </ButtonFilter>
          ))}
        </div>
      </div>

      <div className={styles.Keywords}>
        <p className={styles.CardInfoName}>Ключевые слова:</p>
        <div>
          {question.keywords.map((keyword, index) => (
            <p key={index}>#{keyword}</p>
          ))}
        </div>
      </div>

      <p>
        Автор:
        <span className={styles.author}>{question.createdBy.username}</span>
      </p>
    </div>
  );
};

export default QuestionInfo;
