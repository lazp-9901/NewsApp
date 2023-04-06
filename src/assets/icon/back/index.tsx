import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const IconBack = ({width = 18, height = 22, color = '#ffffff'}: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.12582 7.96636L22 7.96636L22 10.0336L4.12582 10.0336L10.9075 16.5382L9.38348 18L-3.93402e-07 9L9.38348 1.49718e-06L10.9075 1.46179L4.12582 7.96636Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconBack
