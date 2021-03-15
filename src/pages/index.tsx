import { QuestionCardList } from '../components/QuestionCardList';
import { Dialog } from '../components/Dialog';
import { useDialog } from '../hooks/useDialog';
import { PageBase } from '../style';
import styled from 'styled-components';

const IndexPage = () => {
  const [dialogOpen, setDialogOpen, toggleDialog] = useDialog(false);
  return (
    <PageBase>
      <Dialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} handleClose={() => {setDialogOpen(false)}}>
        <a href="">example.com</a>
      </Dialog>
      <ButtonCustom onClick={toggleDialog}>toggle</ButtonCustom>
      <QuestionCardList/>
    </PageBase>
  )
}

export default IndexPage

const ButtonCustom = styled.button``