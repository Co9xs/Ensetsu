import React, { useContext } from 'react'
import styled from 'styled-components'
import { Header } from '../Header'
import { HEADER_HEIGHT } from '../../utils'
import { AuthContext } from '../../context/Auth'

type Props = {
  children: React.ReactNode
}

export const HeaderLayout: React.VFC<Props> = (props) => {
  const { children } = props;
  const { isAuthChecking } = useContext(AuthContext)
  return (
    <HeaderLayoutBase>
      <FixedHeader>
        <Header />
      </FixedHeader>
      {
        isAuthChecking ?
          <PageContent>
            ログイン情報の確認中...
          </PageContent>
          :
          <PageContent>
            {children}
          </PageContent>
      }
    </HeaderLayoutBase>
  )
}

const HeaderLayoutBase = styled.div`
  height: 100%;
  position: relative;
`

const FixedHeader = styled.div`
  z-index: 10;
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

const PageContent = styled.div`
  width: 100%;
  padding-top: ${HEADER_HEIGHT}px;
  height: 100%;
`