import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface GoogleProps {
  width?: number
  height?: number
  color?: string
}

const IconGoogle = ({width = 18, height = 18, color = '#ffffff'}: GoogleProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 9.74165C18 9.13788 17.9403 8.55733 17.8295 8H9V11.2937H14.0455C13.8281 12.358 13.1676 13.2598 12.1747 13.8636V16H15.2045C16.9773 14.5177 18 12.3348 18 9.74165Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.04325 18C11.4734 18 13.5108 17.2262 15 15.9063L12.0912 13.7379C11.2852 14.2565 10.2542 14.5629 9.04325 14.5629C6.69901 14.5629 4.71479 13.0426 4.00701 11H1V13.2391C2.48101 16.0634 5.52484 18 9.04325 18Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 10.6923C3.81837 10.1579 3.71517 9.58704 3.71517 9C3.71517 8.41296 3.81837 7.8421 4 7.30769V5H0.965944C0.350877 6.20243 0 7.56275 0 9C0 10.4372 0.350877 11.7976 0.965944 13L4 10.6923Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00582 3.43715C10.3211 3.43715 11.502 3.87318 12.4305 4.72952L15 2.25084C13.4485 0.856341 11.4206 0 9.00582 0C5.50378 0 2.47411 1.93659 1 4.76094L3.99302 7C4.6975 4.95735 6.67248 3.43715 9.00582 3.43715Z"
        fill="#EA4335"
      />
    </Svg>
  )
}

export default IconGoogle
