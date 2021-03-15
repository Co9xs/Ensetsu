import { GetStaticProps } from 'next'
import { PageBase } from '../../style';
import { getQuestion, getQuestions } from '../../services';
import { Question } from '../../types';
import { QuestionCard } from '../../components/QuestionCard';

type Props = {
  question: Question
}

const QuestionId = ({ question }: Props) => {
  return (
    <PageBase>
      <QuestionCard question={question}/>
    </PageBase>
  )
}


export const getStaticPaths = async () => {
  const questions = await getQuestions() as Question[];
  const paths: string[] = questions.map(question => `/questions/${question.id}`);
  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const question = await getQuestion(id)
  return {
    props: {
      question
    }
  }
}
export default QuestionId