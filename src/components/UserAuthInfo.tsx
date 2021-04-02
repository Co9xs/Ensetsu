import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { useDialog } from '../hooks';
import { Button } from './Button';
import { LoginDialog } from './LoginDialog';
import { UserImage } from './UserImage';
import { AuthContext } from '../context/Auth';
import { PopoverContainer } from './PopoverContainer';
import { logout } from '../services';

type Props = {}

export const UserAuthInfo: React.VFC<Props> = () => {
  const { isLoggedIn, isAuthChecking, currentUser } = useContext(AuthContext);
  const [dialogOpen, setDialogOpen, toggleDialog] = useDialog(false);
  if (isAuthChecking) {
    return <div>確認中...</div>
  }
  if (isLoggedIn) {
    return (
      <UserAuthInfoLoggedIn>
        <PopoverContainer
          items={[
            {name: 'マイページ', onClick: () => console.log('mypage')},
            {name: 'ログアウト', onClick: logout}
          ]}
        >
          <UserImage src={currentUser?.photoURL!} size="sm" />
        </PopoverContainer>
        <UserAuthButton>
          <Button label={"質問を投稿"}/>
        </UserAuthButton>
      </UserAuthInfoLoggedIn>
    )
  }
  return (
    <UserAuthInfoNotLoggedIn>
      <Button label={"ログイン"} onClick={toggleDialog} />
      <LoginDialog
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      handleClose={() => setDialogOpen(false)}
      />
    </UserAuthInfoNotLoggedIn>
  )
};

const UserAuthInfoLoggedIn = styled.div`
  display: flex;
  align-items: center;
`;

const UserAuthButton = styled.div`
  margin-left: .8rem;
`;

const UserAuthInfoNotLoggedIn = styled.div`
`;