import React from 'react'
import SEO from '../components/seo'
import img1 from '../images/acceuil_1.jpg'
import img2 from '../images/acceuil_2.jpg'
import img3 from '../images/acceuil_3.jpg'
import img4 from '../images/acceuil_4.jpg'
import img5 from '../images/acceuil_5.jpg'
import img6 from '../images/acceuil_6.jpg'
import { Link } from 'react-router-dom'

export default function Acceuil() {
    return (
        <div>
            <SEO
                subtitle={"Acceuil"}
                title={"Walid Khaladi - Photographe Professionnel à Alger"}
                description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
                author={"@walidkhaladi"}
                url={"https://www.walidkhaladi.ml"}
                keywords={[
                    `walidkhalladi`,
                    `Walid`,
                    `Khaladi`,
                    `photographe`,
                    `alger`,
                    `Acceuil`,
                    `Portrait`,
                    `Nature`,
                    `Gallerie`,
                    `Évènement`,
                    `Hirak de 2019`,
                    "portfolio",
                    "Photo",
                    "website",
                    "professionnel"]}
            />
            <div className='bg_items' >
                <img className='bg_acceuil' src={img1} alt="hirak du 2019 prise par Walid Khaladi" />
                <Link to='/gallerie/hirak'><h1  className='titre_acceuil'>Hirak du 2019.</h1></Link>
            </div>

            <div className='bg_items' >
                <img className='bg_acceuil' src={img2} alt="section Portrait prise par Walid Khaladi" />
                <Link to='/gallerie/portrait'><h1  className='titre_acceuil'>Portrait.</h1></Link>
            </div>

            <div className='bg_items' >
                <img className='bg_acceuil' src={img3} alt="section Nature prise par Walid Khaladi" />
                <Link to='/gallerie/nature'><h1  className='titre_acceuil'>Nature.</h1></Link>
            </div>

            <div className='bg_items_last' >
                <img className='bg_acceuil_last' src={img4} alt="section évènement prise par Walid Khaladi" />
                <img className='bg_acceuil_last' src={img5} alt="section évènement prise par Walid Khaladi" />
                <img className='bg_acceuil_last' src={img6} alt="section évènement prise par Walid Khaladi" />
                <Link to='/gallerie/evenement'><h1  className='titre_acceuil'>Évènement.</h1></Link>
            </div>
        </div>
    )
}
