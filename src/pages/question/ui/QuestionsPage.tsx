import { QuestionsCard } from '@/features/questions-list';
import styles from './QuestionsPage.module.css';
import QuestionSideBar from '@/features/question-sidebar/ui/QuestionSideBar';

const QuestionsPage = () => {
  return (
    <section className={styles.questionsPage}>
      <div className="container">
        <div className={styles.wrapper}>
          <QuestionsCard />
          <QuestionSideBar />
        </div>
      </div>
    </section>
  );
};

export default QuestionsPage;
