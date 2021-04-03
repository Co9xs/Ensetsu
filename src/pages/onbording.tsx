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
      <OnbordingPage>
        <OnbordingTitle>エンセツにようこそ！</OnbordingTitle>
        <OnbordingUserImage
          src={currentUser?.photoURL!}
          alt={'ユーザーアイコン'}
        />
        <OnbordingForm onSubmit={handleSubmit}>
          <OnbordingMessage>アプリでの表示名を決めましょう</OnbordingMessage>
          <TextInput
            value={displayName}
            onChange={handleChange}
            placeholder={'表示名'}
          />
          <OnBordingButton>
            <Button label={'登録する'}/>
          </OnBordingButton>
        </OnbordingForm>
      </OnbordingPage>
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

const OnbordingPage = styled.div`
 max-width:300px;
 margin: auto;
`
const OnbordingTitle = styled.h2`
 font-size: 28px;
 text-align:center;
 margin-top: 32px;
`
const OnbordingUserImage = styled.img`
 width: 70px;
 height: 70px;
 border-radius: 50%;
 margin: 16px auto 32px;
`
const OnbordingMessage = styled.p`
 font-size: 16px;
 font-weight: bold;
`

const OnBordingButton = styled.div`
 display: flex;
 justify-content: center;
 margin: 18px;
`
const OnbordingForm = styled.form``

export default OnBordingPage