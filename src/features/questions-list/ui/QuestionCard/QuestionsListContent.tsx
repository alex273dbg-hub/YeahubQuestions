import { QuestionsList } from '@/entities/questions';
import { Pagination } from '@/shared/ui';

import styles from './QuestionsListContent.module.css';
import { useQuestionsListContent } from '../../model/useQuestionsListContent';

const QuestionsListContent = () => {
  const { currentPage, totalPages, totalItems, handlePageChange, title, questions } =
    useQuestionsListContent();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Вопросы {title}</h2>
      <div className={styles.line}></div>

      <QuestionsList questions={questions} />

      {totalItems > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default QuestionsListContent;
