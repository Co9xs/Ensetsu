import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../context/Auth'

type Props = {
  children: React.ReactNode
}

export const NoHeaderLayout: React.VFC<Props> = (props) => {
  const { children } = props;
  const { isAuthChecking } = useContext(AuthContext)
  return (
    <NoHeaderLayoutBase>
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
    </NoHeaderLayoutBase>
  )
}

const NoHeaderLayoutBase = styled.div`
  height: 100%;
`
const PageContent = styled.div`
  width: 100%;
  height: 100%;
`