import React from 'react'
import styled from 'styled-components';

type Props = {
  label: string,
  icon?: JSX.Element,
}

export const Button: React.VFC<Props> = (props) => {
  const { label, icon } = props;
  return (
    <ButtonBase>
      <ButtonIcon>{icon}</ButtonIcon>
      <ButtonText>{label}</ButtonText>
    </ButtonBase>
  )
};

const ButtonBase = styled.button`
  padding: 6px 16px;
  font-size: 14px;
  font-weight: bold;
  background-color: #3EA8FF;
  border: none;
  border-radius: 3px;
  color: #FFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonIcon = styled.span``

const ButtonText = styled.span``
