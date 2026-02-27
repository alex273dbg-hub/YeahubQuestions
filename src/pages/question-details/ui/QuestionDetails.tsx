import { Link, useParams } from 'react-router';
import { useGetQuestionsByIdQuery } from '../api/getQuestionsById';
import ImegeNotFound from '@/shared/assets/ImegeNotFound.png';
import { ButtonFilter } from '@/shared/ui';
import parse from 'html-react-parser';
import styles from './QuestionDetails.module.css';

const QuestionDetails = () => {
  const { id } = useParams();
  const { data } = useGetQuestionsByIdQuery(id ? id : '');

  return (
    <section className={styles.QuestionDetailesSection}>
      <div className="container">
        <Link to="/questions/public-questions/" className={styles.GoBack}>
          Назад
        </Link>
        <div className={styles.Content}>
          <div className={styles.CardAnswer}>
            <div className={styles.CardHeder}>
              <img src={data?.imageSrc ? data?.imageSrc : ImegeNotFound} alt="Image" />
              <div className={styles.CardHederText}>
                <h2 className={styles.CardHederTitle}>{data?.title}</h2>
                <p className={styles.CardHederDesc}>{data?.description}</p>
              </div>
            </div>
            <div className={styles.CardAnswerText}>
              <h3 className={styles.CardAnswerTitle}>Краткий ответ</h3>
              <p className={styles.CardAnswerDesc}>
                {data?.shortAnswer && parse(data?.shortAnswer)}
              </p>
            </div>
            <hr />
            <div className={styles.CardAnswerText}>
              <h3 className={styles.CardAnswerTitle}>Развёрнутый ответ</h3>
              <p className={styles.CardAnswerDesc}>{data?.longAnswer && parse(data?.longAnswer)}</p>
            </div>
          </div>
          <div className={styles.CardInfo}>
            <div className={styles.Levels}>
              <p className={styles.CardInfoName}>Уровень:</p>
              <div className={styles.LevelsContent}>
                <p>
                  Cложность:
                  <span>{data?.complexity}</span>
                </p>
                <p>
                  Рейтинг:
                  <span>{data?.rate}</span>
                </p>
              </div>
            </div>
            <div className={styles.Skills}>
              <p className={styles.CardInfoName}>Навыки:</p>
              <div>
                {data?.questionSkills.map((skill) => (
                  <ButtonFilter imgSrc={skill.imageSrc} isActive onClick={() => {}}>
                    {skill.title}
                  </ButtonFilter>
                ))}
              </div>
            </div>
            <div className={styles.Keywords}>
              <p className={styles.CardInfoName}>Ключевые слова:</p>
              <div>
                {data?.keywords.map((keyword) => (
                  <p>#{keyword}</p>
                ))}
              </div>
            </div>
            <p>
              Автор:<span className={styles.author}>{data?.createdBy.username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionDetails;
