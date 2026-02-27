import type QuestionResponse from "@/entities/questions/model/types";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./QuestionsList.module.css";
import { useState } from "react";

interface QuestionsListProps {
  questions: QuestionResponse[];
}

const QuestionsList = ({ questions }: QuestionsListProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  return (
    <ul className={styles.accordionList}>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          toggleAccordion={toggleAccordion}
          openId={openId}
        />
      ))}
    </ul>
  );
};

export default QuestionsList;
