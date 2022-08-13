
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import { useContext } from "react";
import AppContext from "./Store/Contexts";
import Header from "./Components/Header";
import ResponsiveNav from "./Components/ResponsiveNav";



function App() {
  const appCtx = useContext(AppContext)
  const showNav = appCtx.showNav
  return (
    <div>
      <Header />
      {showNav && <ResponsiveNav />}

      <div className={showNav ? 'blur-effect' : ''}>
        <Route path='/'>
          <HomePage />
        </Route>
      </div>


    </div>
  );
}

export default App;
