import ImegeNotFound from '@/shared/assets/ImegeNotFound.png';
import parse from 'html-react-parser';
import styles from './QuestionAnswer.module.css';

interface QuestionAnswerProps {
  question: {
    imageSrc?: string;
    title: string;
    description: string;
    shortAnswer: string;
    longAnswer: string;
  };
}

const QuestionAnswer = ({ question }: QuestionAnswerProps) => {
  return (
    <div className={styles.CardAnswer}>
      <div className={styles.CardHeder}>
        <img src={question.imageSrc ? question.imageSrc : ImegeNotFound} alt={question.title} />
        <div className={styles.CardHederText}>
          <h2 className={styles.CardHederTitle}>{question.title}</h2>
          <p className={styles.CardHederDesc}>{question.description}</p>
        </div>
      </div>

      <div className={styles.CardAnswerText}>
        <h3 className={styles.CardAnswerTitle}>Краткий ответ</h3>
        <div className={styles.CardAnswerDesc}>
          {question.shortAnswer && parse(question.shortAnswer)}
        </div>
      </div>

      <hr />

      <div className={styles.CardAnswerText}>
        <h3 className={styles.CardAnswerTitle}>Развёрнутый ответ</h3>
        <div className={styles.CardAnswerDesc}>
          {question.longAnswer && parse(question.longAnswer)}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
