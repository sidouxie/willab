import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../utils/logo_WK_footer.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-flex">
                <div className="item-logo">
                    <img src={logo} alt="logo wk" title="Acceuil" width="50" height="50" />
                </div>
                <div className="item-link">
                    <ul>
                        <Link to='/cookies'><li>Conditions Générales</li></Link> 
                        <Link to='/politique-confidentialite'><li>Politique de Confidentialité</li></Link> 
                        <Link to='/contact'><li>Contact</li></Link> 
                    </ul>
                </div>
            </div>
            <div className="barre-bot">
                <div className="ligne" />
                    <p className="copyright">
                    Copyright © {new Date().getFullYear()} Walid Khaladi.
                    <br />
                    Designed & Coded by <a className='sidouxie' href='https://www.twitter.com/sidouxie' target='_blank' title='Twitter' rel="noopener noreferrer">Sidouxie.</a> All rights reserved.
                    </p>
            </div>
        </footer>
    )
}

export default Footer
