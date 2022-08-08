import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_walvans.png'
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import AppContext from '../Store/Contexts';


function Header() {

    const appCtx = useContext(AppContext)

    const showNavHandler = () => {
        appCtx.showNavHandler()
    }


    const [small, setSmall] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 200)
            );
        }
    }, []);
    return (
            <div className={`header ${small ? 'header-offset' : ''}`}>
                <div id='logo'>
                    <img src={logo} />
                </div>
                <div className='nav'>
                    <Link to='home'>Home</Link>
                    <Link to='home'>About</Link>
                    <Link to='home'>Contact Us</Link>
                </div>
            <i onClick={showNavHandler} className='menu-icon'><Icon icon="ci:menu-alt-05" /></i>
            </div>
        
    )
}

export default Header