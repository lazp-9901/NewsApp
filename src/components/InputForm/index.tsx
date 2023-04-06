import React from 'react'
import {TextInput} from 'react-native'
import {Box, TouchRipple} from '@dvh-module/app-component'
import {defaultColors} from '../../configs'
import {Text} from '../text'
import IconEye from '../../assets/icon/eye'

interface IProps {
  placeholder?: string
  backgroundColor?: string
  textColor?: string
  placeholderColor?: string
  value?: string
  borderColor?: string
  title?: string
  titleColor?: string
  autoFocus?: boolean
  isPassword?: boolean
  error?: string
  conditional?: boolean
  onChangeText?: any
  multiLine?: boolean
  moreStyle?: object
}

const Input = (props: IProps) => {
  const {
    placeholder,
    placeholderColor,
    value,
    backgroundColor = defaultColors.background_input,
    textColor = defaultColors.h_ffffff,
    borderColor,
    title,
    titleColor = defaultColors.h_ffffff,
    autoFocus = false,
    isPassword = false,
    error,
    conditional,
    onChangeText,
    multiLine,
    moreStyle,
  } = props

  const [showPass, setShowPass] = React.useState<boolean>(false)
  return (
    <Box>
      <Text size={20} weight="600" color={titleColor}>
        {title}
      </Text>
      <TextInput
        style={[
          {
            color: textColor,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            borderRadius: 5,
            fontFamily: 'AvenirNextLTPro-Regular',
            fontWeight: '500',
            paddingHorizontal: 10,
            fontSize: 15,
            maxHeight: 300,
          },
          moreStyle,
        ]}
        selectionColor="red"
        cursorColor="red"
        autoFocus={autoFocus}
        value={value}
        secureTextEntry={!showPass}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={onChangeText}
        multiline={multiLine}
        numberOfLines={multiLine ? 9 : 1}
      />
      {conditional ? null : (
        <Text size={15} color="red" weight="400">
          {error}
        </Text>
      )}
      {isPassword && (
        <Box row center>
          <TouchRipple onPress={() => setShowPass(pre => !pre)}>
            <IconEye color={showPass ? defaultColors.main_green : undefined} />
          </TouchRipple>
          <Text
            size={15}
            color={showPass ? defaultColors.main_green : defaultColors.h_ffffff}
            weight="400"
            marginLeft={10}>
            Hiển thị mật khẩu?
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default Input
