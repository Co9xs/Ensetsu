import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Dialog } from '../components/Dialog'
import { EnsetsuIcon, GoogleIcon } from '../components/icons'
import { login } from '../services';

type Props = {
  dialogOpen: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>,
  handleClose: () => void
}

export const LoginDialog: React.FC<Props> = (props) => {
  const { dialogOpen, setDialogOpen, handleClose } = props;

  return (
    <LoginDialogBase>
      <Dialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} handleClose={handleClose}>
        <LoginDialogBody>
          <EnsetsuIcon size="md" />
          <LoginDialogText>エンセツはエンジニア面接向けの質問集です。実際にあった質問や自分の回答を共有してみましょう。</LoginDialogText>
          <LoginDialogButton onClick={login}>
            <GoogleIcon />
            <LoginDialogLabel>Login with Google</LoginDialogLabel>
          </LoginDialogButton>
          <LoginDialogLink href="/about-ensetsu">エンセツについて</LoginDialogLink>
          <LoginDialogLink href="/about-ensetsu">利用規約</LoginDialogLink>
          <LoginDialogLink href="/privacy-policy">プライバシーポリシー</LoginDialogLink>
        </LoginDialogBody>
      </Dialog>
    </LoginDialogBase>
  )
};

const LoginDialogBase = styled.div`
`;

const LoginDialogBody = styled.div`
  padding: 0 1rem;
`;

const LoginDialogText = styled.p`
  font-size: 14px;
  margin: 1rem auto;
`;

const LoginDialogButton = styled.button`
  box-shadow: 0 2px 5px -2px rgb(100 110 167 / 20%);
  padding: .8em 1.5em;
  white-space: nowrap;
  background: #F5FAFD;
  color: #333;
  border-radius: .45em;
  box-shadow: 0 3px 6px -2px rgb(100 110 167 / 20%);
  border: 1px solid rgba(92,147,187,.15);
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  margin-bottom:1rem;
  margin-top:0;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LoginDialogLabel = styled.span`
  margin-left: .5rem;
`

const LoginDialogLink = styled.a`
  font-size: 12px;
  padding-bottom: 0.25rem;
  display: block;
  color: #8B959D;
`;

