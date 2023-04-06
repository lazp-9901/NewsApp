import React from 'react'
import {Box} from '@dvh-module/app-component'
import {Text} from '../../../components/text'
import {defaultColors} from '../../../configs'
import IconLogo from '../../../assets/icon/logo'
import LoginOptionBar from '../Components/LoginOptionBar'
import {useNavigation} from '@react-navigation/native'

const HomePage = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} color={defaultColors.background}>
      <Box color={defaultColors.background} flex={0.9}></Box>
      <Box color={defaultColors.background} center flex={1} justifyContent="space-between">
        <Box center>
          <IconLogo width={53} height={53} />
          <Text color={defaultColors.h_ffffff} marginTop={10} weight="700" size={28}>
            Millions of Songs.
          </Text>
          <Text color={defaultColors.h_ffffff} weight="700" size={28}>
            Free on Lazify.
          </Text>
        </Box>
        <Box marginBottom={24} width={300}>
          <LoginOptionBar
            title="Sign up"
            colorBackground="#1ED760"
            action={() => navigation.navigate('SignUp')}
          />
          {/* <LoginOptionBar title="Continue with Google" logo={<IconGoogle />} /> */}
          {/* <LoginOptionBar title="Continue with Facebook" logo={<IconFacebook />} /> */}
          <LoginOptionBar title="Log in" />
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
