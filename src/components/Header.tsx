import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { LinkItems } from '../utils'
import { Button } from './Button'
import { useRouter } from 'next/router'

export const Header: React.FC = () => {
  const router = useRouter()
  return (
    <HeaderBase>
      <HeaderInner>
        <HeaderTop>
          <HeaderLogo>
            <svg viewBox="0 0 377.4 88.3" width="98" height="23"><g fill="#111"><path d="M233 56.8h-39c.5 3.5 2.2 6.8 4.8 9.2 2.7 2.3 6.2 3.5 9.8 3.4 2.8 0 5.6-.5 8.2-1.7 2.5-1.1 4.8-2.8 6.5-5l8.2 9.5c-2.5 3.4-5.7 6.1-9.5 7.9-4.6 2.2-9.6 3.3-14.7 3.2-5.7.1-11.4-1.2-16.5-4-4.5-2.5-8.2-6.3-10.7-10.9s-3.8-9.8-3.7-15.1v-2.2c-.1-5.7 1.1-11.3 3.5-16.5 2.2-4.7 5.7-8.6 10.1-11.3 4.7-2.8 10.1-4.2 15.5-4.1 5.2-.1 10.3 1.1 14.9 3.7 4.1 2.5 7.4 6.2 9.4 10.5 2.2 5.1 3.3 10.5 3.2 16.1v7.3zm-16.9-12.9c.1-2.9-.9-5.7-2.8-7.9-1.8-1.9-4.4-2.9-7.9-2.9-2.9-.1-5.8 1.1-7.7 3.2-2 2.6-3.3 5.7-3.6 9h22v-1.4zM128.3 67.9h36.1v14.7h-56.9V72l35.8-54.3h-36.2V2.9h56.6v10.4l-35.4 54.6zM248.8 50.7c0-19.1 12.7-29.2 28.2-29.2s27.9 10.1 27.9 29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1s-12.4 5.5-12.4 16.1v30.7h-15.8l.1-31.4zM320.3 50.7c0-19.1 12.7-29.2 28.2-29.2s27.9 10.1 27.9 29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1S336 40.8 336 51.4v30.7h-15.8l.1-31.4z"></path></g><path fill="#111" d="M2.4 83.3h17c.9 0 1.7-.5 2.2-1.2L68.4 5.2c.6-1-.1-2.2-1.3-2.2H51c-.8 0-1.5.4-1.9 1.1L1.6 81.9c-.3.6.1 1.4.8 1.4zM61 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L41.5 81.2c-.6.9.1 2.1 1.2 2.1H59c.8 0 1.6-.4 2-1.2z"></path></svg>
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
  max-width: 1000px;
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
  justify-content: space-between;
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