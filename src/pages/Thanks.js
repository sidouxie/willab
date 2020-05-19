import React from "react"
import SEO from "../components/seo"
import mailsvg from "../utils/mail-sent.svg"
import img1 from "../images/thanks.jpg"
import { Link } from 'react-router-dom'

export default function Thanks() {
    return (
            <>
        <SEO
          subtitle="Thanks You"
          title={"Walid Khaladi - Photographe Professionnel à Alger"}
                description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
                author={"@walidkhaladi"}
                url={"https://www.walidkhaladi.ml"}
                keywords={[
                    `walidkhalladi`,
                    `Walid`,
                    `Khaladi`,
                    `Thank You`,
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
                    <img className='bg_thanks' src={img1} alt="background jaune remerciment" />
                    <h1  className='titre_acceuil'>Thank you!</h1>
            </div>
    <div className="item-text" style={{ textAlign: "center" }}>

      <div className="container-svg text-effect-delay">
        <img style={{ opacity: "0.3" }} src={mailsvg} alt="Icon mail send" width='300' height='300'/>
      </div>
      <h2
        className="text-effect"
        style={{ padding: "1em 2em" }}
      >
            Votre soumission est reçue et nous vous contacterons bientôt
      </h2>
        <button className="form-btn" >
                <Link rel="canonical" to='/' >Acceuil</Link>    
        </button>
    </div>
    </>
    )
}

