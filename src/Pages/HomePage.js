import React,{Fragment} from 'react'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Reviews from '../Components/Reviews'
import Services from '../Components/Services'
import Tracking from '../Components/Tracking'

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <Tracking />
            <Reviews />
            <Services />
            <Faq />
            <Footer />
        </Fragment>
    )
}

export default HomePage