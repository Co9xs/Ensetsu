import React from 'react'
import styled from 'styled-components';
import { QuestionCard } from './QuestionCard';
import { Question } from '../types'
import Link from 'next/link';
const questions: Question[] = [
  {
    id: 1,
    body: 'URLがブラウザのアドレスバーに入力されてから表示されるまでに起こっていることをできるだけ詳しく教えて下さい。',
    category: 'フロントエンド',
  },
  {
    id: 2,
    body: '今まで一番使用してきた技術において個人的に感じたメリットとデメリットを教えてください。',
    category: '共通'
  },
  {
    id: 3,
    body: '表示が遅いWebサイトがあります。考えられる原因とそれに対する対処法をできるだけ上げてください。',
    category: 'バックエンド',
  },
]

export const QuestionCardList = () => (
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

const QuestionCardListBase = styled.div`
`;

const QuestionCardListInner = styled.div`
`;

const QuestionCardListItem = styled.a`
  cursor: pointer;
  margin: 16px 0px;
`;