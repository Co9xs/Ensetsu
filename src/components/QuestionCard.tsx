import React from 'react'
import styled from 'styled-components';
import { Question } from '../types'
import { EnsetsuIcon } from '../components/icons';

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
        <QuestionCardBodyLogo>
          <EnsetsuIcon size="sm" />
        </QuestionCardBodyLogo>
      </QuestionCardBody>
      <QuestionCardFooter>
      </QuestionCardFooter>
    </QuestionCardBase>
  )
}

const QuestionCardBase = styled.div`
  padding: 8px 16px 16px;
  margin-top: 1rem;
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
  min-height: 300px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuestionCardBodyLogo = styled.div`
  text-align: center;
  font-size: 14px;
`;

const QuestionCardContent = styled.h3`
  background-color: #FFF;
  border-radius: 5px;
  min-height: 230px;
  text-align: center;
  padding: 16px;
`;

const QuestionCardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
`;
