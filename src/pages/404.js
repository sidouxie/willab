import React from "react"
import { Link } from 'react-router-dom'
import SEO from "../components/seo"
import img1 from '../images/404.jpg'

const NotFoundPage = () => (
    <>
    <SEO
      subtitle="404 : Page introuvable"
      title={"Walid Khaladi - Photographe Professionnel à Alger"}
      description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
      author={"@walidkhaladi"}
      url={"https://www.walidkhaladi.ml"}
      keywords={[
        `walidkhalladi`,
        `Walid`,
        `Khaladi`,
        `404`,
        `Page introuvable`,
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
                    <img className='bg_apropos' src={img1} alt="hirak du 2019 prise par Walid Khaladi" />
                    <h1  className='titre_acceuil'>Page introuvable.</h1>
        </div>
        <div className="item-text">
    <section className="error-container">
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
      <span className="zero">
        <span className="screen-reader-text">0</span>
      </span>
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
    </section>
            <h1 style={{ marginTop: "1em", color: '#767676' }}>Page introuvable</h1>
    <p style={{ fontSize: "16px", padding: "1em 2em" }}>
      <b>Nous sommes désolés.</b> La page que vous avez demandée n'a pas pu être
      trouvée. Veuillez retourner à la page d'accueil ou contactez-nous.
    </p>
    <div className="container-contact100-form-btn">
      <Link to="/">
        <button className="contact100-form-btn">Page d'Accueil</button>
      </Link>
            </div>
            </div>
    </>
)

export default NotFoundPage
