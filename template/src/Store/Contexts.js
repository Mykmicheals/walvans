import React, { useState } from 'react'

const AppContext = React.createContext({
    showNave: false,
    showNav: () => { },
    hideNav: () => { },
})

export const AppProvider = (props) => {
    const [showNav, setShowNav] = useState(false)


    const showNavHandler = () => {
        setShowNav(true)
    }

    const hideNavHandler = () => {
        setShowNav(false)
    }

    const contextValue = {

        showNav: showNav,
        showNavHandler: showNavHandler,
        hideNavHandler: hideNavHandler,
    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}


export default AppContext