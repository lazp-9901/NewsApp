import React from 'react'
import {Box} from '@dvh-module/app-component'
import {Text} from '../../../components/text'
import Input from '../../../components/InputForm'
import {defaultColors} from '../../../configs'
import DefaultActionBar from '../../../components/DefaultActionBar'
import LoginOptionBar from '../../homepage/Components/LoginOptionBar'

const SignUp = () => {
  return (
    <Box color={defaultColors.background} flex={1} paddingHorizontal={16}>
      <DefaultActionBar leftTile="SignUp" />
      <Input title="Tên" placeholder="John Doe" autoFocus />
      <Box height={20} />
      <Input title="Email" placeholder="example.lazify@gmail.com" />
      <Box height={20} />
      <Input title="Mật Khẩu" placeholder="1234aA@#$" isPassword />
      <Box height={20} />
      <Box flex={1} justifyContent="space-between" paddingBottom={24} paddingTop={30}>
        <LoginOptionBar
          title="SignUp"
          colorBackground={defaultColors.main_green}
          titleColor={defaultColors.h_ffffff}
          action={() => {}}
        />
        <Text size={14} weight="600" color={defaultColors.h_ffffff} textAlign="center">
          Bạn đã có tài khoản?{' '}
          <Text size={14} weight="600" color={defaultColors.main_green}>
            Login
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

export default SignUp
