import React from 'react'
import {Box, TouchRipple} from '@dvh-module/app-component'
import {defaultColors} from '../../configs'
import {Text} from '../text'
import IconBack from '../../assets/icon/back'
import {useNavigation} from '@react-navigation/native'

interface IProps {
  leftTile?: string
  iconRight?: any
}

const DefaultActionBar = (props: IProps) => {
  const {leftTile, iconRight} = props
  const navigation = useNavigation()

  return (
    <Box justifyContent="space-between" marginTop={20} marginBottom={26}>
      <Box row>
        <TouchRipple onPress={() => navigation.goBack()}>
          <IconBack />
        </TouchRipple>
        <Text marginLeft={16} size={16} weight="600" color={defaultColors.h_ffffff}>
          {leftTile}
        </Text>
      </Box>
      {iconRight && <Box>{iconRight}</Box>}
    </Box>
  )
}

export default DefaultActionBar
