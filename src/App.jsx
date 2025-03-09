import { useState } from 'react'
import Badge from './components/Badge'
import {Banner, BannerTitle, BannerParagraph} from './components/Banner'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Badge>My Custom Badge Component!</Badge>
        <Banner>
          <BannerTitle>You did it!</BannerTitle>
          <BannerParagraph>We would like to congratulate you on a job well done, Vault Dweller.</BannerParagraph>
        </Banner>
      </div>
    </>
  )
}

export default App
