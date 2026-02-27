import type QuestionResponse from '@/entities/questions/model/types';
import styles from './QuestionItem.module.css';

import { Link } from 'react-router';

interface QuestionItemProps {
  question: QuestionResponse;
  toggleAccordion: (id: number) => void;
  openId: number | null;
}

const QuestionItem = ({ question, toggleAccordion, openId }: QuestionItemProps) => {
  return (
    <li className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={() => toggleAccordion(question.id)}>
        <p className={styles.accordionHeaderTitle}>{question.title}</p>
        <svg
          className={`${styles.accordionArrow} ${openId === question.id ? styles.rotated : ''}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#6A0BFF"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`${styles.accordionCollapse} ${openId === question.id ? styles.show : ''}`}>
        <div className={styles.accordionContent}>
          <div className={styles.accordionGradeWrapper}>
            <p className={styles.accordionGrade}>
              Рейтинг:
              <span className={styles.accordionRate}>{question.rate}</span>
            </p>
            <p className={styles.accordionGrade}>
              Сложность:
              <span className={styles.accordionRate}>{question.complexity}</span>
            </p>
          </div>
          {question.imageSrc && <img src={question.imageSrc} alt="Question image" />}
          <p>{question.shortAnswer}</p>

          <Link
            to={`/questions/public-questions/${question.id}`}
            className={styles.accordionMoreLink}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </li>
  );
};

export default QuestionItem;
