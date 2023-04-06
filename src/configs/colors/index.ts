import darkColors from './dark'
import lightColors from './light'

/**
 * màu dùng chung cho toàn bô app
 * được lấy theo design
 * nếu co thay đổi cần ghi rõ dùng ở đâu
 */
export const defaultColors = {
  transparent: 'transparent',

  // #F7941C
  primary: '#FF881D',

  Neutrals: '#7D7B8B',

  // background color
  dark_bg: '#213140',

  bg_EFEFEF: '#EFEFEF',

  // F5F9FD
  bg_F5F9FD: '#F5F9FD',

  // #FFF5E9
  bg_FFF5E9: '#FFF5E9',

  // #FFEEDA
  bg_FFEEDA: '#FFEEDA',

  // #FCDAB0
  bg_FCDAB0: '#FCDAB0',

  // #F7F7F7
  bg_F7F7F7: '#F7F7F7',

  // #FBFBFB
  bg_FBFBFB: '#FBFBFB',
  bg_E5E5E5: '#E5E5E5',
  // #3B5998
  bg_3B5998: '#3B5998',

  bg_47474D: '#47474D',

  // #F6F4F3
  bg_F6F4F3: '#F6F4F3',

  // #FEF6EE
  bg_FEF6EE: '#FEF6EE',

  // ##00CDB4
  bg_00CDB4: '#00CDB4',

  // #fff
  bg_fff: '#fff',

  // text
  // #8A8B93
  text_8A8B93: '#8A8B93',

  // #E0E1E0
  text_E0E1E0: '#E0E1E0',

  // #828282
  text_828282: '#828282',

  // #ABABAB
  text_ABABAB: '#ABABAB',

  text_4F4F4F: '#4F4F4F',

  // #3B3B3B
  text_3B3B3B: '#3B3B3B',

  text_ffffff: '#ffffff',

  // #302996
  text_302996: '#302996',

  // #00CDB4
  text_00CDB4: '#00CDB4',

  // #81838E
  text_81838E: '#81838E',

  // #261A0C
  text_261A0C: '#261A0C',

  // #ff0000
  text_ff0000: '#ff0000',

  // #B0B0B8
  text_B0B0B8: '#B0B0B8',

  // secondary color
  // #AA3B25
  sec_AA3B25: '#AA3B25',

  // #F24405
  sec_F24405: '#F24405',

  // #F25C05
  sec_F25C05: '#F25C05',

  // #F18603
  sec_F18603: '#F18603',

  // #F4B000
  sec_F4B000: '#F4B000',

  // status color
  // format: h_color | rgb_r_g_b | rgba_r_g_b_a

  h_0dc5ad: '#0dc5ad',
  h_161616: '#161616',
  h_2E92FF: '#2E92FF',
  // h_FF881D
  h_FF881D: '#FF881D',

  // #007AFF
  h_007AFF: '#007AFF',

  // "#b5d6ff"
  h_b5d6ff: '#b5d6ff',

  // #B6B9CD
  h_B6B9CD: '#B6B9CD',

  // #36384A
  h_36384A: '#36384A',

  // rgba(29, 172, 14, 0.15)
  rgba_16_16_16_80: 'rgba(16,16,16,0.8)',
  rgba_29_172_14_15: 'rgba(29, 172, 14, 0.15)',

  rgba_46_146_225_2: 'rgba(46, 146, 225, 0.2)',

  rgba_376_38_439_16: 'rgba(0.376, 0.38, 0.439, 0.16)',
  // rgba(59, 59, 59, )
  rgba_59_59_59_55: 'rgba(59, 59, 59, 0.55)',

  rgba_59_59_59_8: 'rgba(59,59,59,0.8)',
  rgba_59_59_59_7: 'rgba(59,59,59,0.7)',
  rgba_59_59_59_0: 'rgba(59,59,59,0)',

  rgba_0_0_0_88: 'rgba(0,0,0,0.88)',
  rgba_16_16_16_8: 'rgba(16,16,16,0.8)',

  rgba_0_0_0_08: 'rgba(0,0,0,0.08)',

  rgbg_255_255_255_75: 'rgba(255,255,255,0.75)',

  rgba_251_251_251_4: 'rgba(251,251,251,0.4)',

  rgba_235_87_87_2: 'rgba(235, 87, 87, 0.2)',

  rgba_46_146_255_2: 'rgba(46, 146, 255, 0.2)',

  rgba_255_146_218_2: 'rgba(255, 146, 218, 0.2)',

  rgba_34_110_147_10: 'rgba(34,110,147,1)',

  rgb_48_41_150: 'rgb(48, 41, 150)',

  rgb_34_122_53: 'rgb(34, 122, 53)',

  rgba_255_136_29_25: 'rgba(255, 136, 29, 0.25)',

  rgba_255_136_29_45: 'rgba(255, 136, 29, 0.45)',

  rgba_0_0_0_25: 'rgba(0,0,0,0.25)',

  // #62CF56
  h_62CF56: '#62CF56',

  // #1DAC0E
  h_1DAC0E: '#1DAC0E',

  // #6771C4
  h_6771C4: '#6771C4',

  // #4E57A9
  h_4E57A9: '#4E57A9',

  // #FF92DA
  h_FF92DA: '#FF92DA',

  // #F06EC4
  h_F06EC4: '#F06EC4',

  // #EAB956
  h_EAB956: '#EAB956',

  // #D73FA3
  h_D73FA3: '#D73FA3',

  // #EB5757
  h_EB5757: '#EB5757',

  // #F10000
  h_F10000: '#F10000',

  // #03DAC6
  h_03DAC6: '#03DAC6',

  // #FE5404
  h_FE5404: '#FE5404',

  h_E10E00: '#E10E00',

  // #02A2F3
  h_02A2F3: '#02A2F3',

  h_ffffff: '#ffffff',

  h_212121: '#212121',

  h_888888: '#888888',

  h_CECECE: '#CECECE',

  h_000000: '#000000',

  h_C7C9D9: '#C7C9D9',

  h_14142B: '#14142B',

  h_C4C4C4: '#C4C4C4',

  h_ECECEC: '#ECECEC',

  h_2567A6: '#2567A6',

  h_F18603: '#F18603',

  h_78849E: '#78849E',

  h_898988: '#898988',

  h_333333: '#333333',

  // #ffedde
  h_ffedde: '#ffedde',

  h_666666: '#666666',

  bg_header: '#ffffff',
  lb_header: '#F7941C',

  h_ffd8b4: '#ffd8b4',
  h_ffbe83: '#ffbe83',
  h_8598A8: '#8598A8',
  h_FEC701: '#FEC701',
  h_A525A7: '#A525A7',

  overlay_min: 'rgba(0,0,0,0)',
  overlay_max: 'rgba(0,0,0,0.3)',
  h_00000060: 'rgba(0,0,0,0.60)',
  h_00000080: 'rgba(0,0,0,0.80)',
  h_00000045: 'rgba(0,0,0,0.45)',
  h_F3F3F3: '#f3f3f3',

  // Mã màu mới
  // Ink
  ink500: '#000000',

  ink400: '#333333',

  ink300: '#B3B3B3',

  ink200: '#E5E5E5',

  ink100: '#F2F2F2',

  ink350: '#808080',

  inkk500: '#0E1C45',

  ink50: '#FAFAFB',

  // Black
  black500: '#333333',

  black400: '#596481',

  black300: '#8592AB',

  black200: '#DBE0E6',

  black100: '#F4F5F6',

  blackOpacity500: 'rgba(74, 74, 74, 1)',
  blackOpacity400: 'rgba(74, 74, 74, 0.8)',
  blackOpacity300: 'rgba(74, 74, 74, 0.3)',
  blackOpacity200: 'rgba(74, 74, 74, 0.1)',
  blackOpacity100: 'rgba(74, 74, 74, 0.05)',

  // White
  white500: 'rgba(255, 255, 255, 1)',

  white400: 'rgba(255, 255, 255, 0.8)',

  white300: 'rgba(255, 255, 255, 0.4)',

  white200: 'rgba(255, 255, 255, 0.3)',

  white100: 'rgba(255, 255, 255, 0.1)',

  // Blue
  blue500: '#4C95EB',

  blue400: '#70AAEF',

  blue300: '#C9DFF9',

  blue200: '#ECF7FF',

  blue100: '#F6FAFE',

  // Green
  green500: '#3CCF4E',

  green400: '#4BD1A1',

  green300: '#1EC6894C',

  green200: '#EBFAED',

  green100: '#F4FCF9',

  // Orange
  orange500: '#EB854C',

  orange400: '#EF9D70',

  orange300: '#F9DAC9',

  orange200: '#FFF0E6',

  orange100: '#FEF9F6',

  // Red
  red600: '#DF0B03',

  red500: '#FF2442',

  red400: '#EF7080',

  red300: '#F9C9CF',

  red200: '#FFE9EC',

  red100: '#FEF6F7',

  // Tone3-Orange
  Tone3_Orange500: '#F08F35',

  Tone3_Orange400: '#F3A55D',

  Tone3_Orange300: '#FBDDC2',

  Tone3_Orange200: '#FEF4EB',

  Tone3_Orange100: '#FEF9F5',

  // Support Color
  bg_default: '#f5f5f5',

  bg_light: 'rgba(238, 238, 238, 1)',

  bg_lighter: 'rgba(251, 251, 251, 1)',

  bg: 'rgba(242, 243, 244, 1)',

  placeholder: 'rgba(246, 246, 246, 1)',

  darkblue: 'rgba(33, 49, 64, 1)',

  imagePlaceholder: 'rgba(232, 237, 243, 1)',

  grabber: 'rgba(221, 221, 221, 1)',

  Primary500: '#2F6BFF',

  tone3_Violet500: '#5346E0',

  inkViolet400: '#536087',

  inkViolet500: '#0E1C45',

  inkViolet100: '#E7E8EC',

  inkViolet200: '#B7BBC7',

  inkViolet300: '#9FA4B5',

  borderInput: '#DBE0E6',

  h_EEEEEE: '#EEEEEE',

  h_D9D9D9: '#D9D9D9',

  h_858585: '#858585',

  h_FF570D: '#FF570D',

  light100: '#E6E6E6',

  // top tab
  inactive: 'rgba(159, 164, 181, 1)',

  h_F3F4F6: '#F3F4F6',

  h_F4F5F6: '#F4F5F6',
  h_E8EDF3: '#E8EDF3',

  h_F2F3F4: '#F2F3F4',

  h_F9F9F9: '#F9F9F9',

  h_EAF0FF: '#EAF0FF',

  h_811A6B: '#811A6B',

  h_F8EEF6: '#F8EEF6',

  Pink500: '#D85888',

  h_F4F4F7: '#F4F4F7',

  h_141414: '#141414',

  h_E6EBF8: '#E6EBF8',

  h_2A63EE: '#2A63EE',

  yellow500: '#FFB830',
  yellow200: '#FFF8EA',

  // PrimaryA
  PrimaryA500: '#FF6E00',
  PrimaryA400: '#FF8B38',
  PrimaryA300: '#FFD4B4',
  PrimaryA200: '#FFF0E6',
  PrimaryA100: '#FFF8F3',

  // PrimaryB
  PrimaryB500: '#000000',
  PrimaryB400: '#333333',
  PrimaryB300: '#B3B3B3',
  PrimaryB200: '#E5E5E5',
  PrimaryB100: '#F2F2F2',
  PrimaryB50: '#FAFAFB',

  // PrimaryC
  PrimaryC500: '#2C2B7C',
  PrimaryC400: '#2C2B7CCC',
  PrimaryC300: '#2C2B7C4C',
  PrimaryC200: '#2C2B7C19',
  PrimaryC100: '#2C2B7C0C',

  // Brand Color
  BrandColor1_500: '#B455A0',
  BrandColor1_200: '#F8EEF6',
  BrandColor1_100: '#FBF7FA',
  BrandColor2_500: '#62267B',

  // Text default
  Text: '#000000',
  h_767577: '#767577',
  h_62267B: '#62267B',

  // new project
  background: '#1B1A1C',
  background_input: '#777777',
  main_green: '#1ED760',
}

export type AppColor = typeof defaultColors

export default {
  default: defaultColors,
  light: {
    ...lightColors,
  },
  dark: {
    ...darkColors,
  },
}
