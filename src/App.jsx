import { useState } from 'react'
import Badge from './components/Badge'
import {Banner, BannerTitle, BannerText} from './components/Banner'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Badge>My Custom Badge Component!</Badge>
        <Banner variant="success">
          <BannerTitle>You did it!</BannerTitle>
          <BannerText>We would like to congratulate you on a job well done, Vault Dweller.</BannerText>
        </Banner>
      </div>
    </>
  )
}

export default App
