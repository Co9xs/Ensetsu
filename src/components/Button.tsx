import React from 'react'
import styled from 'styled-components';

type Props = {
  label: string,
  icon?: JSX.Element,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Button: React.VFC<Props> = (props) => {
  const { label, icon, onClick } = props;
  return (
    <ButtonBase onClick={onClick}>
      { icon ? <ButtonIcon>{icon}</ButtonIcon> : null}
      <ButtonText>{label}</ButtonText>
    </ButtonBase>
  )
};

const ButtonBase = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  background-color: #3EA8FF;
  border: none;
  border-radius: 3px;
  color: #FFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const ButtonIcon = styled.span`
  margin-right: .5rem;
`

const ButtonText = styled.span``
