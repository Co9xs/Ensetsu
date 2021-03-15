import { Dispatch, SetStateAction, useState } from 'react';

export const useDialog = (initialMode = false): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  () => void
] => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(initialMode)
  const toggle = () => setDialogOpen(!dialogOpen)
  return [dialogOpen, setDialogOpen, toggle] 
}