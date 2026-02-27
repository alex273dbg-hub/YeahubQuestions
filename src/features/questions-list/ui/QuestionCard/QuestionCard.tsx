import { useNavigate, useSearchParams } from 'react-router-dom';
import { QuestionsList, QuestionPagination } from '@/entities/questions';
import { useGetPublicQuestionsQuery } from '@/entities/questions/api/questionsApi';
import styles from './QuestionsCard.module.css';
import { useAppSelector } from '@/app/appStore';
import useDebounce from '@/shared/hooks/useDebouns';

const QuestionsCard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = Number(searchParams.get('page')) || 1;
  const limit = 15;

  const { searchValue, specializationsId, specializationsTitle, skillsId, rate, level } =
    useAppSelector((state) => state.sidebarSlice);

  const { data: questions } = useGetPublicQuestionsQuery({
    page: currentPage,
    limit: limit,
    title: useDebounce(searchValue, 500),
    specializationId: specializationsId,
    skills: skillsId.length ? skillsId : undefined,
    rate: rate.length ? rate : undefined,
    complexity: level.length ? level : undefined,
  });

  const handlePageChange = (page: number) => {
    navigate(`?page=${page}`);
  };

  const totalPages = questions ? Math.ceil(questions.total / questions.limit) : 1;
  const totalItems = questions?.total || 0;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Вопросы {specializationsTitle}</h2>
      <div className={styles.line}></div>

      <QuestionsList questions={questions?.data || []} />

      {totalItems > 0 && (
        <QuestionPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default QuestionsCard;
