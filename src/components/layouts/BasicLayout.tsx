import React from 'react'
import styled from 'styled-components'
import { Header } from '../Header'
import { HEADER_HEIGHT } from '../../utils'

type Props = {
  children: React.ReactNode
}

export const BasicLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <BasicLayoutBase>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <PageContent>
        {children}
      </PageContent>
    </BasicLayoutBase>
  )
}

const BasicLayoutBase = styled.div`
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