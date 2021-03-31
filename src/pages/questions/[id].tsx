import { GetStaticProps } from 'next'
import { PageBase } from '../../style';
import { Question } from '../../types';
import { QuestionCard } from '../../components/QuestionCard';
import { Button } from '../../components/Button';
import { getQuestion, getQuestions } from '../../services';

type Props = {
  question: Question
}

const QuestionId = ({ question }: Props) => {
  return (
    <PageBase>
      <QuestionCard question={question} />
      <Button label="自分の回答を投稿する"/>
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