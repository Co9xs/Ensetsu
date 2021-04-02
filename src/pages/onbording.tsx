import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, {useContext, useState} from 'react'
import styled from 'styled-components';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { AuthContext } from '../context/Auth';
import { register } from '../services';
import { PageBase } from '../style';
import { Layout } from '../types';

type Props = {
  layout: Layout
}

const OnBordingPage = ({ layout }: Props) => {
  const { currentUser } = useContext(AuthContext)
  const router = useRouter();
  const initialDisplayName = currentUser ? currentUser.displayName! : ''
  const [displayName, setDisplayName] = useState<string>(initialDisplayName)
  const handleChange = (event: any): void => setDisplayName(event.target.value)
  const handleSubmit = (event: any): void => {
    event.preventDefault();
    const user = {
      uid: currentUser?.uid,
      name: displayName,
      photoURL: currentUser?.photoURL,
    }
    register(user)
    router.push('/')
  }
  return (
    <PageBase>
      <OnbordingForm onSubmit={handleSubmit}>
        <OnbordingTitle>Welcome to Ensetsu</OnbordingTitle>
        <OnbordingUserImage
          src={currentUser?.photoURL!}
          alt={'ユーザーアイコン'}
        />
        <OnbordingMessage>アプリ内で表示する名前を決めてください</OnbordingMessage>
        <TextInput
          value={displayName}
          onChange={handleChange}
        />
        <Button label={'登録'}/>
      </OnbordingForm>
    </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      layout: 'noHeader'
    }
  }
}

const OnbordingTitle = styled.h2`
 font-size: 24px;
`

const OnbordingUserImage = styled.img`
 width: 70px;
 height: 70px;
 border-radius: 50%;
`

const OnbordingMessage = styled.p`
 font-size: 16px;
`

const OnbordingForm = styled.form`
`
export default OnBordingPage