import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { LinkItem } from '../types'
import { useRouter } from 'next/router'

type Props = {
  linkItems: LinkItem[]
}

export const RouterNav: React.FC<Props> = (props) => {
  const { linkItems } = props;
  const router = useRouter()
  return (
    <RouterNavList>
      {linkItems.map(item => (
        <RouterNavItem key={item.label}>
          <Link href={item.href}>
            <a aria-current={ router.pathname === item.href ? 'page' : undefined}>{item.label}</a>
          </Link>
        </RouterNavItem>
      ))}
    </RouterNavList>
  )
}

const RouterNavList = styled.ul`
  padding: 0;
  margin: 0; 
  display: flex;
  justify-content: space-around;
`

const RouterNavItem = styled.li`
  color: #93A5B1;
  font-weight: bold;
  font-size: 14px;
  list-style: none;
  a, a:visited {
    text-decoration: none;
    color: #93A5B1;
    padding: .4rem .5rem;
    display: block;
    &[aria-current] {
      border-bottom: 2px solid #333;
      color: #333;
    }
  }
`