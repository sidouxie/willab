import React from 'react'
import fb from '../utils/facebook-brands.svg'
import tw from '../utils/twitter-brands.svg'
import insta from '../utils/instagram-brands.svg'

export default function Social() {
    return (
        <div className="social-brands">
            <a className='social-ico' href='https://www.facebook.com/walid5420' target='_blank' title='Facebook' rel="noopener noreferrer"><img src={fb} alt="facebook" width="30" height="30" ></img></a>
            <a className='social-ico' href='https://www.twitter.com/sidouxie' target='_blank' title='Twitter' rel="noopener noreferrer"><img src={tw} alt="twitter" width="30" height="30" ></img></a>
            <a className='social-ico' href='https://www.instagram.com/walid_khaladi' target='_blank' title='Instagram' rel="noopener noreferrer"><img src={insta} alt="instagram" width="30" height="30"></img></a>
        </div>
    )
}
