import { GetServerSideProps } from 'next'
import { QuestionCardList } from '../components/QuestionCardList';
import { PageBase } from '../style';
import { getQuestions } from '../services';
import { Question } from '../types';
import { linkItems } from '../utils';
import { RouterNav } from '../components/RouterNav'

type Props = {
  questions: Question[]
}

const BackendPage = ({ questions }: Props) => {
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
export default BackendPage