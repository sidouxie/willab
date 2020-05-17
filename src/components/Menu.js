import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../utils/logo_WK.svg'

const Menu = () => {

    const [isActive, setActive] = useState(false)

    return (
            <div className={isActive &&  'nav-is-open'}>
            <div className="cd-nav-trigger js-cd-nav-trigger text-replace" onClick={() => setActive(!isActive)}>Menu 
                    <span className="cd-nav-trigger__icon" aria-hidden="true"></span>

                    <svg viewBox="0 0 54 54" aria-hidden="true">
                        <circle fill="transparent" strokeWidth="1" cx="27" cy="27" r="25" strokeDasharray="157 157" strokeDashoffset="157"></circle>
                    </svg>
                </div>
                <div className="cd-nav-logo"><Link to="/" ><img src={logo} alt="logo wk" title="Acceuil" width="50" height="50" /></Link></div>
            
            
                <div id="cd-nav" className="cd-nav">
                    <div className="cd-nav__content">
                        <div className="container max-width-sm">
                        <div className="grid">
                            <div className="col-6@md">
                            <nav>
                                <ul className="cd-nav__primary">
                                    <Link to="/" onClick={() => setActive(!isActive)}><li title="Acceuil"><h2>Acceuil</h2></li></Link>
                                    <Link to="/gallerie" onClick={() => setActive(!isActive)}><li title="Gallerie"><h2>Gallerie</h2></li></Link>
                                    <Link to="/apropos" onClick={() => setActive(!isActive)}><li title=" à propos"><h2>À Propos</h2></li></Link>
                                    <Link to="/contact" onClick={() => setActive(!isActive)}><li title="Contact"><h2>Contact</h2></li></Link>
                                </ul>
                            </nav>
                            </div>
                            
                            <div className="col-6@md">
                            <address>
                                <ul className="cd-nav__contact">
                                    <li><a href="walid5420@gmail.com">walid5420@gmail.com</a></li>
                                     <li>0244-12345678</li>
    						        <li><p>Avenue Askri Ahcene, Oued Koriche - Alger, 16000 DZ</p> </li>

                                </ul>
                            </address>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    
            </div>
    )
}

export default Menu
