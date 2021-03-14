import React from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactChild,
  text: string
}

export const TooltipContainer: React.FC<Props> = (props) => {
  const { children, text } = props;
  return (
    <TooltipContainerBase>
      {children}
      <TooltipText role="tooltip">{text}</TooltipText>
    </TooltipContainerBase>
  )
}

const TooltipContainerBase = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    span[role="tooltip"] {
      opacity: 1;
      visibility: visible;
    }
  } 
`;

const TooltipText = styled.span`
  user-select: none;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30px;
  display: inline-block;
  padding: 5px;
  white-space: nowrap;
  font-size: 0.8rem;
  line-height: 1.3;
  background: #333;
  color: #fff;
  border-radius: 3px;
  transition: 0.3s ease-in;
  &:before {
    content: '';
    position: absolute;
    top: -13px;
    left: 50%;
    margin-left: -7px;
    border: 7px solid transparent;
    border-bottom: 7px solid #333;
  }
`;