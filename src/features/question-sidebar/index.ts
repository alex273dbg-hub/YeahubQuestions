import { sidebarActions, sidebarReducer } from './model/sidebarSlice';
import QuestionSideBar from './ui/QuestionSideBar';
import { useGetSpecializationsQuery, useGetSkillsQuery } from './api/getSpec';

export {
  sidebarActions,
  sidebarReducer,
  QuestionSideBar,
  useGetSpecializationsQuery,
  useGetSkillsQuery,
};
