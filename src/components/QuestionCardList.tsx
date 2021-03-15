import React from 'react'
import styled from 'styled-components';
import { QuestionCard } from './QuestionCard';
import { Question } from '../types'
import Link from 'next/link';

type Props = {
  questions: Question[]
}

export const QuestionCardList: React.VFC<Props> = (props) => {
  const { questions } = props;
  return (
    <QuestionCardListBase>
      <QuestionCardListInner>
        {questions.map(question => (
          <Link href={`/questions/${question.id}`} key={question.id}>
            <QuestionCardListItem>
              <QuestionCard question={question}/>
            </QuestionCardListItem>
          </Link>
        ))}
      </QuestionCardListInner>
    </QuestionCardListBase>
  )
}

const QuestionCardListBase = styled.div`
`;

const QuestionCardListInner = styled.div`
`;

const QuestionCardListItem = styled.a`
  cursor: pointer;
  margin: 16px 0px;
`;