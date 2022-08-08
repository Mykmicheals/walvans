import React from 'react'
import { Icon } from '@iconify/react';


function Services() {
  return (
      <div className='services'>
          <h2 className='section-header'>Our Services</h2>
          <p className='service-top-p'>We serve all industries</p>
        <div className='small-border'></div>
          <div className='tracking'>
              <div className='tracking-inner'>
                  <i className='tracking-icon service-icon'><Icon icon="uil:ship" color="white" /></i>
                  <div className='tracking-inner-word'>
                      <h4>Tracking Tools</h4>
                      <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight, including that carried by train, van, truck, or intermodal container.</p>
                  </div>

              </div>

              <div className='tracking-inner'>
                  <i className='tracking-icon service-icon'><Icon icon="fa:cubes" color="white" /></i>
                  <div className='tracking-inner-word'>
                      <h4>Tracking Tools</h4>
                      <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight, including that carried by train, van, truck, or intermodal container.</p>
                  </div>

              </div>

              <div className='tracking-inner'>
                  <i className='tracking-icon service-icon'><Icon icon="bi:send" color="white" /></i>
                  <div className='tracking-inner-word'>
                      <h4>Tracking Tools</h4>
                      <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight, including that carried by train, van, truck, or intermodal container.</p>
                  </div>

              </div>

          </div>
    </div>
  )
}

export default Services