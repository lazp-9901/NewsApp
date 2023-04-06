import React from 'react'
import HomePage from './Views/HomePage'
import HomePageLogin from './HomePageLogin'

const Home = () => {
  const isLogged = true
  return isLogged ? <HomePageLogin /> : <HomePage />
}

export default Home
