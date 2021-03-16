import React from 'react'
import styled from 'styled-components';

export const GoogleIcon: React.VFC = () => (
  <SvgBase>
    <svg viewBox="0 0 533.5 544.3" width="18" height="18">
      <path d="M533.5 278.4a320.07 320.07 0 00-4.7-55.3H272.1v104.8h147a126 126 0 01-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1a272.19 272.19 0 00243.2 149.9z" fill="#34a853"></path><path d="M119.3 324.3a163 163 0 010-104.2V150H28.9a272.38 272.38 0 000 244.4z" fill="#fbbc04"></path><path d="M272.1 107.7a147.89 147.89 0 01104.4 40.8l77.7-77.7A261.56 261.56 0 00272.1 0 272.1 272.1 0 0028.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path>
    </svg>
  </SvgBase>
)

const SvgBase = styled.div`
  & > svg {
    vertical-align: bottom;
  }
  line-height: 1;
`

