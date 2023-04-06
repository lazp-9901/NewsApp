import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen from '../features/splash'
import {MainNavigationParamList} from './types'
import HomePage from '../features/homepage/Views/HomePage'
import SignUp from '../features/Auth/Views/SignUp'
import DemoAI from '../features/Intern'

const Stack = createStackNavigator<MainNavigationParamList>()

const MainStack: React.FC<any> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="DemoAI">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="DemoAI" component={DemoAI} />
    </Stack.Navigator>
  )
}

export default MainStack
