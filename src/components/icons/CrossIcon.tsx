import React from 'react'
import styled from 'styled-components';

export const CrossIcon: React.VFC = () => (
  <SvgBase>
    <svg version="1.1" width="12px" height="12px" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
    <g>
      <polygon points="512,52.535 459.467,0.002 256.002,203.462 52.538,0.002 0,52.535 203.47,256.005 0,459.465 
        52.533,511.998 256.002,308.527 459.467,511.998 512,459.475 308.536,256.005" fill="rgb(75, 75, 75)"></polygon>
    </g>
    </svg>
  </SvgBase>
)

const SvgBase = styled.div`
  & > svg {
    vertical-align: bottom;
  }
  line-height: 1;
`