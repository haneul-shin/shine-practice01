import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Service from '../Service/Service'

function Services() {
  return (
    <div>
      {/*마이페이지, FAQ, 문의 (이메일, 전화, 채팅 등...)*/}
      <HeroSection id='hero-services'/>
      <Service />
    </div>
  )
}

export default Services
