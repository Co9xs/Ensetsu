import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { LinkItems } from '../utils'
import { Button } from './Button'
import { useRouter } from 'next/router'
import { EnsetsuIcon } from './icons'

export const Header: React.FC = () => {
  const router = useRouter()
  return (
    <HeaderBase>
      <HeaderInner>
        <HeaderTop>
          <HeaderLogo>
            <EnsetsuIcon size="md"/>
          </HeaderLogo>
          <Button label="Login"/>
        </HeaderTop>
        <HeaderLinkList>
          {LinkItems.map(item => (
            <HeaderLinkItem key={item.label}>
              <Link href={item.href}>
                <a aria-current={ router.pathname === item.href ? 'page' : undefined}>{item.label}</a>
              </Link>
            </HeaderLinkItem>
          ))}
        </HeaderLinkList>
      </HeaderInner>
    </HeaderBase>
  )
}

const HeaderBase = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: solid 1.5px #EFEFEF;
`

const HeaderInner = styled.nav`
  max-width: 700px;
  margin: auto;
  padding: 16px 16px 0;
  a, a:visited {
    text-decoration: none;
    color: #93A5B1;
    padding: .5rem 0;
    display: block;
    &[aria-current] {
      border-bottom: 2px solid #333;
      color: #333;
    }
  }
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const HeaderLogo = styled.h1`
  font-size: 23px;
`

const HeaderButton = styled.div`
`

const HeaderLinkList = styled.ul`
  padding: 0;
  margin: 0; 
  display: flex;
  justify-content: space-around;
`

const HeaderLinkItem = styled.li`
  color: #93A5B1;
  font-weight: 600;
  font-size: 14px;
  list-style: none;
  a {
    padding:  4px 8px;
  }
  a[aria-current] {
    border-bottom: 2px solid #333;
  }
`