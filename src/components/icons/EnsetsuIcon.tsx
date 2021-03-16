import React from 'react'
import styled from 'styled-components';

type Props = {
  size: 'sm' | 'md' 
}

export const EnsetsuIcon: React.VFC<Props> = (props) => {
  const { size } = props;
  const width = size === 'sm' ? '60px' : '120px';
  const height = size === 'sm' ? '16px' : '32px';
  return (
    <SvgBase>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={width} height={height} viewBox="0 0 120 32"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
          <path d="M650 275 c0 -20 -5 -25 -25 -25 -18 0 -25 -5 -25 -20 0 -14 7 -20 24
          -20 22 0 24 -4 28 -66 5 -85 16 -94 120 -94 77 0 78 0 78 25 0 24 -2 25 -70
          25 -65 0 -70 2 -76 24 -3 13 -4 37 -2 52 3 26 7 29 46 32 38 3 43 1 40 -15 -2
          -10 -13 -19 -26 -21 -14 -2 -22 -10 -22 -23 0 -15 7 -19 35 -19 48 0 75 29 75
          80 l0 39 -72 3 c-67 3 -73 5 -76 26 -5 34 -52 31 -52 -3z"/>
          <path d="M320 267 c0 -21 7 -26 58 -41 75 -21 82 -20 82 5 0 22 -38 42 -102
          54 -36 7 -38 6 -38 -18z"/>
          <path d="M900 283 c0 -5 6 -30 13 -58 11 -43 17 -50 41 -53 23 -3 27 0 23 15
          -3 10 -11 37 -17 61 -9 35 -15 42 -35 42 -14 0 -25 -3 -25 -7z"/>
          <path d="M1000 233 c15 -50 21 -58 45 -61 22 -3 26 0 22 15 -3 10 -11 37 -18
          61 -10 36 -16 42 -40 42 l-27 0 18 -57z"/>
          <path d="M1090 212 c0 -100 -9 -110 -105 -114 -64 -3 -70 -5 -73 -26 -3 -21 0
          -22 72 -22 127 0 154 27 163 162 l6 78 -32 0 -31 0 0 -78z"/>
          <path d="M40 255 c0 -22 4 -25 40 -25 l40 0 0 -60 0 -60 -50 0 c-47 0 -50 -2
          -50 -25 l0 -25 125 0 125 0 0 25 c0 23 -3 25 -50 25 l-50 0 0 60 0 60 45 0
          c41 0 45 2 45 25 l0 25 -110 0 -110 0 0 -25z"/>
          <path d="M510 207 c0 -86 -16 -100 -116 -105 -70 -4 -74 -5 -74 -28 0 -23 3
          -24 70 -24 132 0 170 33 170 147 0 71 -1 73 -25 73 -24 0 -25 -2 -25 -63z"/>
        </g>
      </svg>
    </SvgBase>
  )
}

const SvgBase = styled.div`
  & > svg {
    vertical-align: bottom;
  }
  line-height: 1;
`