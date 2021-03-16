import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';

type Props = {
  src: string,
  size: 'sm' | 'md'
}

export const UserImage: React.FC<Props> = (props) => {
  const { src, size } = props;
  return (
    <UserImageBase>
      <Image
        src={src}
        alt="ユーザーアイコン"
        width={size === 'sm' ? 30 : 40 }
        height={size === 'sm' ? 30 : 40 }
      />
    </UserImageBase>
  )
}

const UserImageBase = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
`;