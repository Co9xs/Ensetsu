import { GetServerSideProps } from 'next'
import { QuestionCardList } from '../components/QuestionCardList';
import { PageBase } from '../style';
import { getQuestions } from '../services';
import { Question } from '../types';
import { linkItems } from '../utils';
import { RouterNav } from '../components/RouterNav'
import { useRequireLogin } from '../hooks/useRequireLogin';

type Props = {
  questions: Question[]
}

const InfraPage = ({ questions }: Props) => {
  useRequireLogin()
  return (
    <PageBase>
      <RouterNav linkItems={linkItems}/>
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