import {Box} from '@dvh-module/app-component'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {View, Image} from 'react-native'
import {routes} from '../../navigation/routes'

const SplashScreen = () => {
  const navigation = useNavigation()

  // React.useEffect(() => {
  //   // eslint-disable-next-line prettier/prettier
  //   (async () => {
  //     const changeScreen = await setTimeout(() => navigation.navigate(routes.HomePage), 1000)
  //     clearTimeout(changeScreen)
  //   })()
  // }, [])
  return (
    <Box
      style={{flex: 1, backgroundColor: '#1B1A1C', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../assets/logo/logo.png')} style={{width: 200, height: 200}} />
    </Box>
  )
}
export default SplashScreen
