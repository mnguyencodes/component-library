import { useState } from 'react'
import Badge from './components/Badge'
import {Banner, BannerTitle, BannerText} from './components/Banner'
import {Card, CardTitle, CardText} from './components/Card'
import {TestimonialWithPicture, TestimonialWithoutPicture} from './components/Testimonial'
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
        <Card>
          <CardTitle>A title!</CardTitle>
          <CardText>A paragraph!</CardText>
        </Card>
        <TestimonialWithPicture>With Picture!</TestimonialWithPicture>
        <TestimonialWithoutPicture>Without Picture!</TestimonialWithoutPicture>
        <h1>Test</h1>
      </div>
      
    </>
  )
}

export default App
