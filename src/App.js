import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import SecondHeader from './Components/SecondHeader/SecondHeader'
import MainPage from './Components/MainPage/MainPage'

const App = () => {
  return (
    <div>
      <Header/>
      <SecondHeader/>
      <MainPage/>
    </div>
  )
}

export default App