import { useAppSelector } from '@/app/appStore';
import { useGetPublicQuestionsQuery } from '@/entities/questions/api/questionsApi';
import useDebounce from '@/shared/hooks/useDebouns';
import { useSearchParams, useNavigate } from 'react-router';

export const useQuestionsListContent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = Number(searchParams.get('page')) || 1;
  const limit = 15;

  const { searchValue, specializationsId, specializationsTitle, skillsId, rate, level } =
    useAppSelector((state) => state.sidebarSlice);

  const { data: questions } = useGetPublicQuestionsQuery({
    page: currentPage,
    limit: limit,
    title: useDebounce<string>(searchValue, 500),
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

  return {
    currentPage,
    totalPages,
    totalItems,
    handlePageChange,
    title: specializationsTitle,
    questions: questions?.data || [],
  };
};
