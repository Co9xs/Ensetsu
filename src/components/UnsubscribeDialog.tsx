import firebase from 'firebase'
import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Dialog } from '../components/Dialog'
import { EnsetsuIcon } from '../components/icons'
import { Button } from './Button'

type Props = {
  dialogOpen: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>,
  handleClose: () => void
}

export const UnsubscribeDialog: React.VFC<Props> = (props) => {
  const { dialogOpen, setDialogOpen, handleClose } = props;
  
  const Unsubscribe = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
  }

  return (
    <UnsubscribeDialogBase>
      <Dialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} handleClose={handleClose}>
        <UnsubscribeDialogBody>
          <EnsetsuIcon size="md" />
          <UnsubscribeDialogText>
            退会するとユーザー情報は完全に削除され、復元できません。よろしいですか？
          </UnsubscribeDialogText>
        </UnsubscribeDialogBody>
        <UnsubscribeDialogFooter>
          <Button label={'退会する'}/>
          <Button label={'キャンセル'}/>
        </UnsubscribeDialogFooter>
      </Dialog>
    </UnsubscribeDialogBase>
  )
};

const UnsubscribeDialogBase = styled.div`
`;

const UnsubscribeDialogBody = styled.div`
  padding: 0 1rem;
`;

const UnsubscribeDialogText = styled.p`
  font-size: 14px;
  margin: 1rem auto;
`;

const UnsubscribeDialogFooter = styled.footer`
  display: flex;
`;