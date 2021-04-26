import React, { useContext } from 'react'
import styled from 'styled-components';
import { useDialog } from '../hooks';
import { Button } from './Button';
import { LoginDialog } from './LoginDialog';
import { UserImage } from './UserImage';
import { AuthContext } from '../context/Auth';
import { UserPopover } from './UserPopover';
import { usePopover } from '../hooks/usePopover';

type Props = {}

export const UserAuthInfo: React.VFC<Props> = () => {
  const { isLoggedIn, isAuthChecking, currentUser } = useContext(AuthContext);
  const [dialogOpen, setDialogOpen] = useDialog(false);
  const [popoverOpen, setPopoverOpen, togglePopover] = usePopover(false);
  if (isAuthChecking) {
    return <div>確認中...</div>
  }
  if (isLoggedIn) {
    return (
      <UserAuthInfoLoggedIn>
        <UserPopover
          popoverOpen={popoverOpen}
          setPopoverOpen={setPopoverOpen}
          togglePopover={togglePopover}
        >
          <UserImage src={currentUser?.photoURL!} size="sm" />
        </UserPopover>
        <UserAuthButton>
          <Button label={"質問を投稿"}/>
        </UserAuthButton>
      </UserAuthInfoLoggedIn>
    )
  }
  return (
    <UserAuthInfoNotLoggedIn>
      <Button label={"ログイン"} onClick={() => {
        console.log('open')
        setDialogOpen(true)
      }} />
      <LoginDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
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