import { GetServerSideProps } from 'next'
import { QuestionCardList } from '../components/QuestionCardList';
import { PageBase } from '../style';
import { getQuestions } from '../services';
import { Question } from '../types';

type Props = {
  questions: Question[]
}

const InfraPage = ({ questions }: Props) => {
  return (
    <PageBase>
      <QuestionCardList questions={questions}/>
    </PageBase>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const questions = await getQuestions();
  return {
    props: {
      questions
    }
  }
}
export default InfraPage