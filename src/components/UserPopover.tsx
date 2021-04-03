import firebase from 'firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { AuthContext } from '../context/Auth';

type Props = {
  popoverOpen: boolean,
  setPopoverOpen: Dispatch<SetStateAction<boolean>>,
  children: React.ReactNode,
  togglePopover: () => void,
}

export const UserPopover: React.VFC<Props> = (props) => {
  const { popoverOpen, setPopoverOpen, children, togglePopover } = props;
  const popoverRef = useRef<HTMLUListElement>(null);
  const { currentUser } = useContext(AuthContext);
  const router = useRouter()

  const logout = async (): Promise<void> => {
    await firebase.auth().signOut()
    router.push('/')
    router.reload()
  }

  const outsideClickHandler = (e: MouseEvent) => {
    if (popoverRef.current?.contains(e.target as Node)) return
    setPopoverOpen(false)
    removeOutsideClickHandler()
  }

  const addOutsideClickHandler = () => {
    document.addEventListener('click', outsideClickHandler)
  }

  const removeOutsideClickHandler = () => {
    document.removeEventListener('click', outsideClickHandler)
  }

  useEffect(() => {
    if (popoverOpen === true) {      
      addOutsideClickHandler();
    }
    return () => {
      removeOutsideClickHandler();
    };
  }, [popoverOpen]);
  
  return (
    <PopoverContainerBase>
      <PopoverBackground data-popover-active={popoverOpen}/>
        <PopoverClickHandler onClick={togglePopover}>
          {children}
        </PopoverClickHandler>
        <PopoverItemList role="popover" data-popover-active={popoverOpen} ref={popoverRef}>
          <PopoverItem>
            <Link href={`/users/${currentUser?.uid}`}>
              <a>マイページ</a>
            </Link>
          </PopoverItem>
          <PopoverItem>
            <Link href={`/users/${currentUser?.uid}/stocks`}>
              <a>ストックした記事</a>
            </Link>
          </PopoverItem>
          <PopoverItem>
            <a onClick={logout}>ログアウト</a>
          </PopoverItem>
          <PopoverItem>
            <Link href={`/users/${currentUser?.uid}`}>
              <a>退会する</a>
            </Link>
          </PopoverItem>
        </PopoverItemList>
    </PopoverContainerBase>
  )
}

const PopoverBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
  display: none;
  &[data-popover-active="true"] {
    display: block;
  }
`;

const PopoverContainerBase = styled.div`
  position: relative;
  cursor: pointer;
`;

const PopoverClickHandler = styled.div`
`;

const PopoverItemList = styled.ul
  `width: 190px;
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
  left: 50%;
  transform: translateX(-50%);
  top: 35px;
  display: inline-block;
  white-space: nowrap;
  font-size: 0.8rem;
  line-height: 1.3;
  position: absolute;
  background: #FFF;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgb(0 61 111 / 25%);
  line-height: 1.6;
  font-size: 13.5px;
  z-index: 200;
  display: none;
  &[data-popover-active="true"] {
    display: block;
  }
`;

const PopoverItem = styled.li`
  &+li {
    border-top: #FFF 1px solid;
  }
  & > a {
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 7px 12px;
  }
  &:hover {
    background: #F1F5F9;
  }
`