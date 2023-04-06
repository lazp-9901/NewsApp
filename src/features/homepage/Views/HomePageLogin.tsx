import React from 'react'
import {Box, TouchSingle} from '@dvh-module/app-component'
import {Text} from '../../../components/text'
import {defaultColors} from '../../../configs'

const HomePageLogin = () => {
  return (
    <Box middle center>
      <Text weight="600" size={24} color={defaultColors.PrimaryA500}>
        Home Page Login
      </Text>
    </Box>
  )
}

export default HomePageLogin
