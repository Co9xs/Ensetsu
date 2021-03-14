import React from 'react'
import styled from 'styled-components';
import { QuestionCard } from './QuestionCard';
import { Question } from '../types'

const questions: Question[] = [
  {
    body: 'URLがブラウザのアドレスバーに入力されてから表示されるまでに起こっていることをできるだけ詳しく教えて下さい。',
    category: 'フロントエンド',
  },
  {
    body: '今まで一番使用してきた技術において個人的に感じたメリットとデメリットを教えてください。',
    category: '共通'
  },
  {
    body: '表示が遅いWebサイトがあります。考えられる原因とそれに対する対処法をできるだけ上げてください。',
    category: 'バックエンド'
  },
]

export const QuestionCardList = () => (
  <QuestionCardListBase>
    <QuestionCardListInner>
      {questions.map(question => (
        <QuestionCardListItem>
          <QuestionCard question={question}/>
        </QuestionCardListItem>
      ))}
    </QuestionCardListInner>
  </QuestionCardListBase>
)

const QuestionCardListBase = styled.div`
  padding: 8px 16px;
  border-radius: 5px;
`;

const QuestionCardListInner = styled.h3`
  margin: 8px 0px;
`;

const QuestionCardListItem = styled.h3`
  margin: 8px 0px;
`;