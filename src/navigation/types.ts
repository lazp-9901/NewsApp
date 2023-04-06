/* eslint-disable @typescript-eslint/no-namespace */
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import type {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native'
import type {StackScreenProps} from '@react-navigation/stack'

export type BottomTabNavigationParamList = {
  SplashScreen: undefined
  HomePage: undefined
  Search: undefined
  YourLibrary: undefined
}

export type MainNavigationParamList = {
  BottomTab: NavigatorScreenParams<BottomTabNavigationParamList>
  SplashScreen: undefined
  HomePage: undefined
  Search: undefined
  YourLibrary: undefined
  SignUp: undefined
  DemoAI: undefined
}

export type RoutesType = BottomTabNavigationParamList & MainNavigationParamList

export type BottomScreenNavigationProps<T extends keyof BottomTabNavigationParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabNavigationParamList, T>,
    MainStackScreenNavigationProps<keyof MainNavigationParamList>
  >

export type MainStackScreenNavigationProps<T extends keyof MainNavigationParamList> =
  StackScreenProps<MainNavigationParamList, T>

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends MainNavigationParamList {}
  }
}
