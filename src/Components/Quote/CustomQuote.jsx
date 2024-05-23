import React from 'react'
import { Container } from 'react-bootstrap'
import './CustomQuote.css'

const CustomQuote = () => {
  return (
    <>
    <Container>
        <div className="main-qoute-container d-flex justify-content-center gap-5">
            <div className="quote-left display-5 fw-bold">Your product can look <br/> something like this too </div>
            <div className="quote-right text-secondary fs-2">…these are also <br /> my works =)</div>
        </div>
    </Container>
      
    </>
  )
}

export default CustomQuote
