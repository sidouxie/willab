import React from 'react'
import SEO from '../components/seo'
import img1 from '../images/apropo_1.jpg'
import img2 from '../images/apropo_2.jpg'
import icoTop from '../utils/icon-top.svg'
import icoBot from '../utils/icon-bot.svg'
import logo1 from '../images/logos/logo_1.svg'
import logo2 from '../images/logos/logo_2.svg'
import logo3 from '../images/logos/logo_3.svg'
import logo4 from '../images/logos/logo_4.svg'
import logo5 from '../images/logos/logo_5.svg'
import logo6 from '../images/logos/logo_6.svg'

export default function Apropos() {
    return (
        <div>
            <SEO
                subtitle={'À Propos'}
                title={"Walid Khaladi - Photographe Professionnel à Alger"}
                description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
                author={"@walidkhaladi"}
                url={"https://www.walidkhaladi.ml"}
                keywords={[
                    `walidkhalladi`,
                    `Walid`,
                    `Khaladi`,
                    `a propos`,
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
                    "professionnel"]}/>
            <div className='bg_items' >
                    <img className='bg_apropos' src={img1} alt="hirak du 2019 prise par Walid Khaladi" />
                    <h1  className='titre_acceuil'>À Propos.</h1>
            </div>
            <div className='section_info'>
                <div className='section_img'><img src={img2} alt="walid khaladi portrait"/></div>
                <div className='section_text'>
                    <img className='ico_top' src={icoTop} alt="icon fleche top" width='70' height='70'/>
                    <h3>Walid Khaladi</h3>
                    <p>Né et grandit en Algérie. Walid Khaladi a commencé à photographier pour la première fois à l'âge de 14 ans - influencé par l'autoportrait et la photographie conceptuelle.</p>
                    <img className='ico_bot' src={icoBot} alt="icon fleche bot" width='70' height='70'/>
                </div>
                <div className='section_num'><h2 className='21' >#21</h2></div>
            </div>
            <div className='item-text'>
                <h3 className='titre_h3'>Biographie résumé :</h3>
                
                <p className='texty'>Grandir avec la montée des médias sociaux et des techniques numériques a permis à Walid
d’avoir une vision plus large d’une industrie internationale. Après avoir obtenu son diplôme
de photographe, il a commencé à travailler avec les écoles, où il a naturellement senti le
passage à la photographie de mode. Quelques années plus tard.</p>
                <p className='texty'>Walid aime créer des images intemporelles et émotives. il est inspiré par la force des
médias digitale, la beauté unique et le style classique.</p>
                <p className='texty'> Il vit actuellement à Alger-Centre, et voyage régulièrement pour des missions ou des sorties
en plein nature, le fait d’être également à l’aise devant l’objectif a donné lieu à de nombreuses
apparitions à la télévision et au numérique.</p>
                <p className='texty'> Vous avez un projet à faire connaître, un projet musical à mettre en avant, une entreprise à
                développer ? Travailler votre communication pour vous démarquer de vos concurrents et proposer des visuels créatifs,
                techniques, esthétiques. Le beau aura toujours raison ! Mettez-vous en avant, osez passer devant l’objectif pour réaliser
                vos portraits professionnels ou votre book de comédien pour démarcher auprès des professionnels du cinéma. Que ce soit pour des images
                prises sur le vif ou des photos studio plus pensées et travaillées en amont, le travail du photographe est de valoriser, faire du beau avec tout ce qu’il a sous la main !
                Le photographe sait choisir le bon angle pour regarder, et créer des images lisibles et créatives pour sublimer votre activité.</p>
                <p className='texty'>Le photographe est un professionnel qui va rendre éternels vos moments les plus mémorables, en les capturant grâce à son appareil.
                Par le biais de cette page, chacun des photographes de votre localité, 
                à Alger dans le 16000 seront à portée de main, instantanément.</p>
                <p className='texty'>N’hésitez pas à contacter différents photographes, afin de demander les prix des shootings pour les comparer. Si vous désirez savoir si vous faites le bon choix,
                découvrez nos avis photographe free lance, écrits par d’autres clients. Nombreux sont les événements valant la peine de contacter ce type de professionnel : photographe mariage,
                ou photographe bébé sont des possibilités éventuelles.</p>
                <p className='texty'>Nous sommes là pour enregistrer les moments forts de votre mariage.</p>
                <p className='texty'>Grâce à notre équipement de pointe, notre expérience et notre sensibilité, nous pourrons capturer les émotions de l'événement et faire ressortir les plus beaux moments de la cérémonie et des festivités.</p>
                <p className='texty'>Nous sommes à vos côtés pour vous aider à rendre cette journée inoubliable.</p>


            </div>
            
            <div className='item-text'>
                <h2 className='item-titre'>CLIENTS</h2>
                <div className='clients'>
                <div className="item-logo">
                    <img src={logo1} alt="client logo" width='100' height='100'/>
                </div>
                <div className="item-logo">
                    <img src={logo2} alt="client logo" width='100' height='100'/>
                </div>
                <div className="item-logo">
                    <img src={logo3} alt="client logo" width='100' height='100'/>
                </div>
                <div className="item-logo">
                    <img src={logo4} alt="client logo" width='100' height='100'/>
                </div>
                <div className="item-logo">
                    <img src={logo5} alt="client logo" width='100' height='100'/>
                </div>
                <div className="item-logo">
                    <img src={logo6} alt="client logo" width='100' height='100'/>
                </div>
                </div>
            </div>
        </div>
    )
}
