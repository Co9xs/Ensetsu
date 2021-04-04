import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, {useContext, useState} from 'react'
import styled from 'styled-components';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { AuthContext } from '../context/Auth';
import { checkUserNameExistance, register } from '../services';
import { PageBase } from '../style';
import { Layout } from '../types';

type Props = {
  layout: Layout
}

const OnBordingPage = () => {
  const { currentUser } = useContext(AuthContext)
  const router = useRouter();
  const initialDisplayName = currentUser ? currentUser.displayName! : ''
  const [displayName, setDisplayName] = useState<string>(initialDisplayName)
  const [userName, setUserName] = useState<string>('')
  const [userNameError, setUserNameError] = useState<string>('')
  const [displayNameError, setDisplayNameError] = useState<string>('')
  const handleDisplayNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    displayNameValidation(event.target.value);
    setDisplayName(event.target.value);
  }
  const handleDisplayNameBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    displayNameValidation(event.target.value);
  }
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    userNameValidation(event.target.value);
    setUserName(event.target.value);
  }
  const handleUserNameBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    userNameValidation(event.target.value);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const user = {
      uid: currentUser?.uid,
      displayName: displayName,
      userName: userName,
      photoURL: currentUser?.photoURL,
    }
    checkUserNameExistance(userName).then(() => {
      register(user)
      router.push('/')
    }).catch((error) => {
      alert(error.message)
    })
  }

  const userNameValidation = (value: string): void => {
    setUserNameError('')
    if (!value) {
      setUserNameError('ユーザー名は必須です')
    }
    if (value.length > 8) {
      setUserNameError('ユーザー名は8文字以内にしてください')
    }
    const regex = /^[_0-9a-z]*$/
    if (!regex.test(value)) {
      setUserNameError('ユーザー名には半角英小文字, 数字, _(アンダースコア)のみ使用できます')
    }
  }

  const displayNameValidation = (value: string): void => {
    setDisplayNameError('')
    if (!value) {
      setDisplayNameError('表示名は必須です')
    }
    if (value.length > 8) {
      setDisplayNameError('表示名は8文字以内にしてください')
    }
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
          <OnbordingMessage>アプリ内での表示名</OnbordingMessage>
          <TextInput
            value={displayName}
            onChange={handleDisplayNameChange}
            onBlur={handleDisplayNameBlur}
            placeholder={'表示名'}
          />
          <ErrorMessage>{displayNameError}</ErrorMessage>
          <OnbordingMessage>ユーザー名</OnbordingMessage>
          <TextInputRow>
            <TextInputLabel>https://ensetsu.dev/</TextInputLabel>
            <TextInput
              value={userName}
              onChange={handleUserNameChange}
              onBlur={handleUserNameBlur}
              placeholder={'ユーザー名'}
            />
          </TextInputRow>
          <ErrorMessage>{userNameError}</ErrorMessage>
          <OnBordingButton>
            <Button label={'登録する'} disabled={userNameError === '' ? false : true}/>
          </OnBordingButton>
        </OnbordingForm>
      </OnbordingPage>
    </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
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
 margin-top: 16px;
 font-size: 16px;
 font-weight: bold;
`
const TextInputRow = styled.div`
  display: flex;
  `

const TextInputLabel = styled.label`
  padding: 4px 0px 4px 4px;
  border: none;
  outline: none;
  border-bottom: 2px solid #efefef;
  `

const ErrorMessage = styled.p`
  margin-top: 2px;
  color: #ff6868;
  font-size: 0.8rem;
  font-weight: bold;
`
const OnBordingButton = styled.div`
 display: flex;
 justify-content: center;
 margin: 18px;
`
const OnbordingForm = styled.form``

export default OnBordingPage