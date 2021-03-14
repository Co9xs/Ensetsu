import React from 'react'
import styled from 'styled-components';
import { BaloonIcon } from './icons';
import { TooltipContainer } from './TooltipContainer';

export const Question = () => (
  <QuestionBase>
    <QuestionContent>
      <QuestionHeading>
        Q, ブラウザにURLを入れてから表示されるまでに起こっていることをできるだけ詳しく教えて下さい。
      </QuestionHeading>
      <QuestionFooter>
        <TooltipContainer text="コメントを見る">
          <BaloonIcon />
        </TooltipContainer>
      </QuestionFooter>
    </QuestionContent>
  </QuestionBase>
)

const QuestionBase = styled.div`
  border: 2px solid #333;
  padding: 8px 16px;
  border-radius: 5px;
`;

const QuestionHeading = styled.h3`
  margin: 8px 0px;
`;

const QuestionContent = styled.div`
  border: 1ps solid #333;
`;

const QuestionFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
