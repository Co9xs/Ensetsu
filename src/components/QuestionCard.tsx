import React from 'react'
import styled from 'styled-components';
import { BaloonIcon } from './icons';
import { TooltipContainer } from './TooltipContainer';
import { Question } from '../types'

type Props = {
  question: Question
}

export const QuestionCard: React.VFC<Props> = (props) => {
  const { question } = props;
  return (
    <QuestionCardBase>
      <QuestionCardHeader>
        <QuestionCardBadge>
          { question.category }
        </QuestionCardBadge>
      </QuestionCardHeader>
      <QuestionCardBody>
        <QuestionCardContent>
          { question.body }
        </QuestionCardContent>
        <QuestionCardBodyLogo>ensetsu.dev</QuestionCardBodyLogo>
      </QuestionCardBody>
      <QuestionCardFooter>
        <TooltipContainer text="コメントを見る">
          <BaloonIcon />
        </TooltipContainer>
      </QuestionCardFooter>
    </QuestionCardBase>
  )
}

const QuestionCardBase = styled.div`
  padding: 8px 18px;
  min-height: 85px;
  margin-top: .7rem;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
`;

const QuestionCardHeader = styled.div`
  margin-bottom: 8px;
`;

const QuestionCardBadge = styled.span`
  background: #EE6557;
  font-size: 12px;
  color: #fff;
  border-radius: 15px;
  padding: 4px 8px;
`;

const QuestionCardBody = styled.div`
  background-color: #5EB9BA;
  border-radius: 5px;
  height: 300px;
  padding: 24px;
`;

const QuestionCardBodyLogo = styled.p`
  text-align: center;
  font-size: 14px;
`;

const QuestionCardContent = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  height: 220px;
  text-align: center;
  padding: 16px;
`;

const QuestionCardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
`;
