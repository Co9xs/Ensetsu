import React from 'react'
import styled from 'styled-components'
import { EnsetsuIcon } from './icons'
import { UserAuthInfo } from './UserAuthInfo'

export const Header: React.FC = () => {
  return (
    <HeaderBase>
      <HeaderInner>
        <HeaderTop>
          <HeaderLogo>
            <EnsetsuIcon size="md"/>
          </HeaderLogo>
          <HeaderAuth>
            <UserAuthInfo/>
          </HeaderAuth>
        </HeaderTop>
      </HeaderInner>
    </HeaderBase>
  )
}

const HeaderBase = styled.div`
  width: 100%;
  background: #fff;
  box-sizing: content-box;
`

const HeaderInner = styled.nav`
  max-width: 700px;
  margin: auto;
  padding: 16px 16px 0;
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
const HeaderAuth = styled.div``