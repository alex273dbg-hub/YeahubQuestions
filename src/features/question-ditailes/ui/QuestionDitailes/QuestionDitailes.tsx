import { Link, useParams } from 'react-router';
import { useGetQuestionsByIdQuery } from '@/pages/question-details/api/getQuestionsById';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import QuestionInfo from '../QuestionInfo/QuestionInfo';
import styles from './QuestionDetails.module.css';

const QuestionDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetQuestionsByIdQuery(id ? id : '');

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error || !data) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <section className={styles.QuestionDetailesSection}>
      <div className="container">
        <Link to="/questions/public-questions/" className={styles.GoBack}>
          Назад
        </Link>
        <div className={styles.Content}>
          <QuestionAnswer question={data} />
          <QuestionInfo question={data} />
        </div>
      </div>
    </section>
  );
};

export default QuestionDetails;
