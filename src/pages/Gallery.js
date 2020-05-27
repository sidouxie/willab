import React from 'react'
import LightboxEx from '../components/LightboxEx'
import SEO from '../components/seo'


import img1 from '../images/acceuil_2.jpg'

export default function Gallery() {

    return (
        <div>
        <SEO
          subtitle={'gallerie'}
          title={"Walid Khaladi - Photographe Professionnel à Alger"}
                description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
                author={"@walidkhaladi"}
                url={"https://www.walidkhaladi.ml"}
                keywords={[
                    `walidkhalladi`,
                    `Walid`,
                    `Khaladi`,
                    `Gallerie`,
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
                    <img className='bg_gallery' src={img1} alt="hirak du 2019 prise par Walid Khaladi" />
                    <h1  className='titre_acceuil'>Gallerie.</h1>
            </div>
            <LightboxEx />
        </div>
    )
}
