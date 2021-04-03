import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Question } from '../types'
import { StockIcon } from './icons';
import { TooltipContainer } from './TooltipContainer';

type Props = {
  question: Question
}

export const QuestionCard: React.VFC<Props> = (props) => {
  const { question } = props;
  return (
    <QuestionCardBase>
      <QuestionCardHeader>
        <QuestionCardDate>
          2021年03月31日に投稿
        </QuestionCardDate>
      </QuestionCardHeader>
      <Link href={`/questions/${question.id}`}>
        <QuestionCardBody>
            { question.body }
        </QuestionCardBody>
      </Link>
      <QuestionCardFooter>
          <QuestionCardIconWrapper>
            <TooltipContainer text={'ストック'}>
              <StockIcon/>
            </TooltipContainer>
          </QuestionCardIconWrapper>
      </QuestionCardFooter>
    </QuestionCardBase>
  )
}

const QuestionCardBase = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0,0,0,0.12);
  padding: 16px;
`;

const QuestionCardHeader = styled.div`
  margin-bottom: 8px;
`;

const QuestionCardDate = styled.time`
  font-size: 14px;
  color: rgba(0,0,0,0.6);
  `
const QuestionCardIconWrapper = styled.span`
  border: 2px solid rgba(0,0,0,0.6);
  padding: 8px;
  border-radius: 50%;
`;

const QuestionCardBody = styled.a`
  font-weight: bold;
  font-size: 18px;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;


const QuestionCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
