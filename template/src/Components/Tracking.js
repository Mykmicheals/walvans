import React from 'react'
import { Icon } from '@iconify/react';

function Tracking() {
    return (
        <div className='tracking-outer'>
            <div className='tracking'>
                <div className='tracking-inner'>
                    <i className='tracking-icon'><Icon icon="et:tools" color="#8aadd4" /></i>
                    <div className='tracking-inner-word'>
                        <h4>Tracking Tools</h4>
                        <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight, including that carried by train, van, truck, or intermodal container.</p>
                    </div>

                </div>

                <div className='tracking-inner'>
                    <i className='tracking-icon'><Icon icon="entypo:bar-graph" color="#8aadd4" /></i>
                    <div className='tracking-inner-word'>
                        <h4>Tracking Tools</h4>
                        <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight, including that carried by train, van, truck, or intermodal container.</p>
                    </div>

                </div>

                <div className='tracking-inner'>
                    <i className='tracking-icon'><Icon icon="icomoon-free:price-tags" color="#8aadd4" /></i>
                    <div className='tracking-inner-word'>
                        <h4>Tracking Tools</h4>
                        <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight, including that carried by train, van, truck, or intermodal container.</p>
                    </div>

                </div>

            </div>
            <form className='track-form'>
                <div className='track-form-inner'>
                    <input placeholder='Insert tracking number here ....' />
                    <button className='track-btn'>Track It</button>
                </div>
            </form>
        </div>
    )
}

export default Tracking