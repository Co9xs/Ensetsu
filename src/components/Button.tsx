import React from 'react'
import styled from 'styled-components';

type Props = {
  label: string,
  icon?: JSX.Element,
}
export const Button: React.VFC<Props> = (props) => {
  const { label } = props;
  return (
    <ButtonBase>
      {label}
    </ButtonBase>
  )
};

const ButtonBase = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: #3EA8FF;
  border: none;
  border-radius: 3px;
  color: #FFF;
`;
