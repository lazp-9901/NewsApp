import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainStack from './navigation/MainStack'
import {StatusBar, View} from 'react-native'

export default function App() {
  console.log()
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1B1A1C" />
    </View>
  )
}
