import React from 'react'
import {Box, TouchRipple} from '@dvh-module/app-component'
import {Text} from '../../../components/text'

interface BarProps {
  logo?: any
  action?: () => void
  colorBackground?: string
  title?: string
  titleColor?: string
  borderColor?: string
  width?: number
  height?: number
}

const LoginOptionBar = ({
  logo,
  titleColor = '#FFFFFF',
  colorBackground,
  title,
  borderColor = '#FFFFFF',
  action,
}: BarProps) => {
  return (
    <TouchRipple onPress={action}>
      <Box overflow="hidden">
        {logo ? (
          <Box radius={45} borderColor={borderColor} borderWidth={1} padding={16} center row>
            {logo}
            <Text marginLeft={50} size={16} weight="700" color={titleColor}>
              {title}
            </Text>
          </Box>
        ) : (
          <Box center middle color={colorBackground} radius={45} padding={16}>
            <Text size={16} weight="700" color={titleColor}>
              {title}
            </Text>
          </Box>
        )}
      </Box>
    </TouchRipple>
  )
}

export default LoginOptionBar
