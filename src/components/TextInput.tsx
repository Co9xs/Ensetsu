import React from 'react'
import styled from 'styled-components';

type Props = {
  value: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  placeholder?: string
}

export const TextInput: React.VFC<Props> = (props) => {
  const { value, onChange, onBlur, placeholder } = props;
  return (
    <InputBase>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputBase>
  )
}

const InputBase = styled.div`
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: none;
  outline: none;
  border-bottom: 2px solid #efefef;
  trasition: color .3s;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3EA8FF;
    trasition: color .3s;
  }
`



