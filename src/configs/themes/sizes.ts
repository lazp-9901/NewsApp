import { Dimensions } from 'react-native'
import { fontSizeLine, widthLize } from './scales'

const { width, height } = Dimensions.get('window')

const margin_default = 16

export const sizes = {
  width,
  height,

  // size for text
  text: {
    tiny: {
      size: fontSizeLine(10),
      lineHeight: fontSizeLine(16),
    },
    small: {
      size: fontSizeLine(12),
      lineHeight: fontSizeLine(16),
    },
    medium: {
      size: fontSizeLine(14),
      lineHeight: fontSizeLine(20),
    },
    normal: {
      size: fontSizeLine(16),
      lineHeight: fontSizeLine(24),
    },
    large: {
      size: fontSizeLine(20),
      lineHeight: fontSizeLine(32),
    },
    huge: {
      size: fontSizeLine(24),
      lineHeight: fontSizeLine(36),
    },

    h1: fontSizeLine(40),
    h2: {
      size: fontSizeLine(48),
      lineHeight: fontSizeLine(72),
    },
    h3: {
      size: fontSizeLine(40),
      lineHeight: fontSizeLine(60),
    },
    h4: {
      size: fontSizeLine(36),
      lineHeight: fontSizeLine(56),
    },
    h5: {
      size: fontSizeLine(32),
      lineHeight: fontSizeLine(48),
    },
    h6: {
      size: fontSizeLine(28),
      lineHeight: fontSizeLine(40),
    },
  },

  margin: widthLize(margin_default),
  margin_2: widthLize(margin_default / 2),
  margin_3: widthLize(margin_default / 3),
}
