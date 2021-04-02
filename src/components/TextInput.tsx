import React from 'react'
import styled from 'styled-components';

type Props = {
  value: string,
  onChange: (event: any) => void,
  placeholder?: string
}

export const TextInput: React.VFC<Props> = (props) => {
  const { value, onChange, placeholder } = props;
  return (
    <InputBase>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputBase>
  )
}

const InputBase = styled.div`
`;

const Input = styled.input`
`;