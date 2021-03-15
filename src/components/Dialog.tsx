import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import styled from 'styled-components';

type Props = {
  dialogOpen: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>,
  children: React.ReactNode,
  handleClose: () => void
}

export const Dialog: React.FC<Props> = (props) => {
  const { dialogOpen, setDialogOpen, children, handleClose } = props;
  const dialogRef = useRef<HTMLDivElement>(null);

  const outsideClickHandler = (e: MouseEvent) => {
    if (dialogRef.current?.contains(e.target as Node)) return
    setDialogOpen(false)
    removeOutsideClickHandler()
  }

  const closeButtonClickHandler = () => {
    handleClose();
    removeOutsideClickHandler();
  }

  const addOutsideClickHandler = () => {
    document.addEventListener('click', outsideClickHandler)
  }

  const removeOutsideClickHandler = () => {
    document.removeEventListener('click', outsideClickHandler)
  }

  useEffect(() => {
    if (dialogOpen === true) {      
      addOutsideClickHandler();
    }
    return () => {
      removeOutsideClickHandler();
    };
  },[dialogOpen]);

  return (
    <DialogBase>
      <DialogBackground data-dialog-active={dialogOpen}>
        <DialogContent data-dialog-active={dialogOpen} ref={dialogRef}>
          <span onClick={closeButtonClickHandler}>x</span>
          { children }
        </DialogContent>
      </DialogBackground>
    </DialogBase>
  )
};

const DialogBase = styled.div`
`;

const DialogBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0,0.74);
  z-index: 10;
  overflow: hidden;
  display: none;
  &[data-dialog-active="true"] {
    display: block;
  }
`;

const DialogContent = styled.div`
  border-radius: 9px;
  width: 400px;
  max-width: 86vw;
  text-align: center;
  padding: 2.3rem 1.7rem;
  box-shadow: 0 3px 10px rgb(0 22 103 / 20%);
  line-height: 1.7;
  background: #FFF;
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  &[data-dialog-active="true"] {
    z-index: 20;
  }
`;
