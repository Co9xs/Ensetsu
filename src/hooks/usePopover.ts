import { Dispatch, SetStateAction, useState } from 'react';

export const usePopover = (initialMode = false): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  () => void
] => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(initialMode)
  const toggle = () => setPopoverOpen(!popoverOpen)
  return [popoverOpen, setPopoverOpen, toggle] 
}