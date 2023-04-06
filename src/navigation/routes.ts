import type {RoutesType} from './types'

type Entries<T> = {
  [K in keyof T]: K
}

export const routes: Entries<RoutesType> = {
  BottomTab: 'BottomTab',
  SplashScreen: 'SplashScreen',
  HomePage: 'HomePage',
  Search: 'Search',
  YourLibrary: 'YourLibrary',
  SignUp: 'SignUp',
  DemoAI: 'DemoAI',
}
