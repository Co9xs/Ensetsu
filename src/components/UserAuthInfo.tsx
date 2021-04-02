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
  const { isLoggedIn, currentUser } = useContext(AuthContext);
  const [dialogOpen, setDialogOpen, toggleDialog] = useDialog(false);
  return (
    <UserAuthInfoBase>
      { isLoggedIn ?
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
        :
        <UserAuthInfoNotLoggedIn>
          <Button label={"ログイン"} onClick={toggleDialog} />
        </UserAuthInfoNotLoggedIn>
      }
      <LoginDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        handleClose={() => setDialogOpen(false)}
      />
    </UserAuthInfoBase>
  )
};

const UserAuthInfoBase = styled.div`
`;

const UserAuthInfoLoggedIn = styled.div`
  display: flex;
  align-items: center;
`;

const UserAuthButton = styled.div`
  margin-left: .8rem;
`;

const UserAuthInfoNotLoggedIn = styled.div`
`;