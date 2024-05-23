import React from 'react'
import { Container } from 'react-bootstrap'
import './CustomeQuote1.css'
import DigiLogo from '../Assets/digi.png'
import UnitiLogo from '../Assets/unityLogo.svg'
import ArissLogo from '../Assets/ArissLogo.svg'
import GloryLogo from '../Assets/gloryLogo.png'
import BaselicoLogo from '../Assets/baselicoLogo.png'

const CustomeQuote1 = () => {
  return (
    <>
     <Container>
        <div className="main-quote1-container d-flex flex-column align-items-center">
            <div className="quote1-top">
                <p className='text-secondary fs-5'>So far I have worked on 10+ projects:</p>
            </div>
            <div className="quote1-bottom d-flex p-5 gap-5 flex-wrap justify-content-center ">
                <div className="quote1-img digiLogo">
                    <img src={DigiLogo} alt="" />
                </div>
                <div className="quote1-img UnitiLogo">
                    <img src={UnitiLogo} alt="" />
                </div>
                <div className="quote1-img CrisLogo">
                    <img src={ArissLogo} alt="" />
                </div>
                <div className="quote1-img GloryLogo">
                    <img src={GloryLogo} alt="" />
                </div>
                <div className="quote1-img BaselicoLogo">
                    <img src={BaselicoLogo} alt="" />
                </div>
            </div>
        </div>
        </Container> 
    </>
  )
}

export default CustomeQuote1
