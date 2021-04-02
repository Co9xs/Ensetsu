import React, { useState } from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactChild,
  items: any[]
}

export const PopoverContainer: React.FC<Props> = (props) => {
  const { children, items } = props;
  const [popoverOpen, setPopoverOpen] = useState(false)
  const toggle = () => setPopoverOpen(!popoverOpen)
  return (
    <PopoverContainerBase>
      <PopoverClickHandler onClick={toggle}>
        {children}
      </PopoverClickHandler>
      <PopoverItemList role="popover" aria-hidden={!popoverOpen}>
        {items.map(item => (
          <PopoverItem key={item.name} onClick={item.onClick}>{item.name}</PopoverItem>
        )) }
      </PopoverItemList>
    </PopoverContainerBase>
  )
}

const PopoverContainerBase = styled.div`
  position: relative;
  cursor: pointer;
`;

const PopoverClickHandler = styled.div`
`;

const PopoverItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 35px;
  display: inline-block;
  white-space: nowrap;
  font-size: 0.8rem;
  line-height: 1.3;
  background: #333;
  color: #fff;
  border-radius: 3px;
  transition: 0.3s ease-in;
  &[aria-hidden="true"] {
    opacity: 0;
    visility: hidden;
  }
  &:before {
    content: '';
    position: absolute;
    top: -13px;
    left: 50%;
    margin-left: -7px;
    border: 7px solid transparent;
    border-bottom: 7px solid #333;
  }
`;

const PopoverItem = styled.li`
padding: .5rem;
  &+li {
    border-top: #FFF 1px solid;
  }
`