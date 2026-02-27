import { createBrowserRouter } from 'react-router';
import QuestionsPage from '@/pages/question/ui/QuestionsPage';
import QuestionDetails from '@/pages/question-details/ui/QuestionDetails';
import BaseLayout from './layouts/BaseLayuots';

export const router = createBrowserRouter([
  {
    path: '/questions/public-questions/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <QuestionsPage /> },
      { path: ':id', element: <QuestionDetails /> },
    ],
  },
]);
