/* eslint-disable react/display-name */
import {RefText, Text as TextModule, TextBaseProps} from '@dvh-module/app-component'
import React from 'react'
import {Platform} from 'react-native'
import {defaultColors, fontSizeLine} from '../../configs'

const getFont: (weight: TextBaseProps['weight']) => string = weight => {
  // if (Platform.OS === 'android') {
  switch (weight) {
    case '100':
    case '200':
      return 'AvenirNextLTPro-ExtraLight'
    case '300':
      return 'AvenirNextLTPro-Light'
    case 'normal':
    case '400':
    case '500':
      return 'AvenirNextLTPro-Regular'
    case '600':
      return 'AvenirNextLTPro-Demi'
    case '800':
      return 'AvenirNextLTPro-ExtraBold'
    case '900':
      return 'AvenirNextLTPro-Black'
    case '700':
    case 'bold':
      return 'AvenirNextLTPro-Bold'
    default:
      return 'AvenirNextLTPro-Regular'
  }
  // }
  // return 'AvertaStd-Regular'
}
/**
 * custom lai text
 * add font family
 */
export const Text = React.forwardRef<RefText, TextBaseProps>((props, ref) => {
  const {weight, ...rest} = props
  return (
    <TextModule
      weight={Platform.OS === 'ios' ? weight : undefined}
      // weight={weight}
      lineHeight={props.size + fontSizeLine(4)}
      fontFamily={getFont(weight)}
      color={defaultColors.Text}
      {...rest}
      ref={ref}
    />
  )
})
