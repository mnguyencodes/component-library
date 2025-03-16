import { useState } from 'react'
import Badge from './components/Badge'
import {Banner, BannerTitle, BannerText} from './components/Banner'
import {Card, CardTitle, CardText} from './components/Card'
import {TestimonialWithPicture, 
  TestimonialWithoutPicture,
  TestimonialText,
  TestimonialName,
  TestimonialTitle} from './components/Testimonial'
import vaultBoy from "./assets/vault_boy.png"
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
        <TestimonialWithPicture src={vaultBoy}>
          <TestimonialText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quia facere iste sapiente dolore. Aut, nostrum. Neque, reiciendis debitis autem odio, similique temporibus consequuntur a ex quasi illo magnam molestias?
          </TestimonialText>
          <TestimonialName>
            Vault Boy
          </TestimonialName>
          <TestimonialTitle>
            Vault 101 Overseer
          </TestimonialTitle>
          </TestimonialWithPicture>
        <TestimonialWithoutPicture>Without Picture!</TestimonialWithoutPicture>
        <h1>Test</h1>
      </div>
      
    </>
  )
}

export default App
