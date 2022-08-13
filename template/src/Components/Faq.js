import React from 'react'
import background from '../assets/images/bg_1.jpg'

function Faq() {
  return (
    <div className='faq-outer'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='faq-inner'>
        <h2 className='section-header faq-h2'>Our Services</h2>
        <p className='service-top-p'>We serve all industries</p>
        <div className='small-border'></div>

        <div className='faq-questions'>
          <div className='faq-left'>
            <p>Why are the shipping rates so volatile</p>
            <p>What are the usual methods of freight payments</p>
            <p>Do you handle international household moves</p>
            <p>How and where can we pickup the cargo at destination</p>
          </div>

          <div className='faq-right'>
            <p>Why are the shipping rates so volatile</p>
            <p>What are the usual methods of freight payments</p>
            <p>Do you handle international household moves</p>
            <p>How and where can we pickup the cargo at destination</p>
          </div>

        </div>

        <p className='more-questions'>HAVE MORE QUESTIONS</p>
      </div>
      <div className='contact'>
        <p>Contact us now to get quotes for all your global shipping needs</p>
        <p id='contact-right'>contact</p>
      </div>
    </div>
  )
}

export default Faq