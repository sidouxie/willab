import ReactDOM from "react-dom"
import React from "react"
import "./styles/styles.css"
import './styles/sheet.scss'

import Menu from "./components/Menu"
import Acceuil from "./pages/Acceuil"
import Gallery from "./pages/Gallery"
import Apropos from "./pages/Apropos"
import Contact from "./pages/Contact"
import Hirak from "./pages/Hirak"
import Portrait from "./pages/Portrait"
import Nature from "./pages/Nature"
import Evenement from "./pages/Evenement"
import Cookies from "./pages/Cookies"
import Thanks from "./pages/Thanks"
import NotFoundPage from "./pages/404"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Social from './components/Social'
import Footer from './components/Footer'
import CookieConsent from 'react-cookie-consent'
import ContextPop from './components/ContextPop'
import Politique from "./pages/Politique"


function App() {
  return(
    <>
        <Router> 

          <Menu />
          <Switch>
            <Route rel="canonical" path='/' exact component={Acceuil} />
            <Route rel="canonical" path='/gallerie' exact component={Gallery} />
            <Route rel="canonical" path='/apropos'  component={Apropos}/>
            <Route rel="canonical" path='/contact' component={Contact}/>
            <Route rel="canonical" path='/gallerie/hirak' component={Hirak}/>
            <Route rel="canonical" path='/gallerie/portrait' component={Portrait}/>
            <Route rel="canonical" path='/gallerie/nature' component={Nature}/>
            <Route rel="canonical" path='/gallerie/evenement' component={Evenement}/>
            <Route rel="canonical" path='/cookies' component={Cookies}/>
            <Route rel="canonical" path='/politique-confidentialite' component={Politique}/>
            <Route rel="canonical" path='/thanks' component={Thanks} />
            <Route rel="canonical" path='/*' component={NotFoundPage} />
          </Switch>
        <Social />
        <Footer />
        <ContextPop />
        <CookieConsent
          location="bottom"
          buttonText="Accepter"
          cookieName="Walid Khaladi cookies"
          style={{ background: "rgba(0,0,0,0.95)", alignItems:"center" }}
          buttonStyle={{ background: "#05a3a7", padding: "10px 15px" ,borderRadius: "25px" ,color: "#fff", fontSize: "13px" }}
          expires={150}><span className="text-cookies">Nous utilisons des cookies pour vous garantir la meilleure expèrience sur notre site. Si vous continuez à utiliser ce dernier, 
          nous considérerons que vous acceptez l'utilisation des cookies. </span>
          <span><Link rel="canonical" to='/cookies' id='savoir'>En savoir plus</Link></span>
      </CookieConsent>
      </Router>
    </>
)
}
ReactDOM.render(<App />, document.getElementById("root"));
