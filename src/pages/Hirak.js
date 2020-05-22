import React, { Component } from 'react'
import SEO from '../components/seo'
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import imgLeft from '../images/cookies.jpg'
import imgRight from '../images/acceuil_2.jpg'
import img1 from '../images/acceuil_1.jpg'
import img2 from '../images/hirak/14.jpg'
import img3 from '../images/hirak/15.jpg'
import img4 from '../images/hirak/16.jpg'
import img5 from '../images/hirak/17.jpg'
import img6 from '../images/hirak/18.jpg'
import img7 from '../images/hirak/19.jpg'
import img8 from '../images/hirak/20.jpg'
import icoRight from '../utils/chevron-right.svg'
import icoLeft from '../utils/chevron-left.svg'



const images = [
    {
      image: img2,
      id: 0,
      desc: `de ouf`,
    },
    {
      image: img3,
      id: 1,
      desc: `bordil`,
    },
    {
      image: img4,
      id: 2,
      desc: `bordil c'est `,
    },
    {
      image: img5,
      id: 3,
      desc: `un truc de ouf`,
    },
    {
        image: img6,
        id: 4,
        desc: `un truc de ouf`,
    },
    {
        image: img7,
        id: 5,
        desc: `un truc de ouf`,
    },
    {
        image: img8,
        id: 6,
        desc: `un truc de ouf`,
    },
    
  ];

export default class Hirak extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }
    render() {
        const { photoIndex, isOpen } = this.state;

      return (
            
            <div>
          <SEO
            subtitle={'Hirak du 2019'}
            title={"Walid Khaladi - Photographe Professionnel à Alger"}
                description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
                author={"@walidkhaladi"}
                url={"https://www.walidkhaladi.ml"}
                keywords={[
                    `walidkhalladi`,
                    `Walid`,
                    `Khaladi`,
                    `Hirak de 2019`,
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
                    <h1  className='titre_acceuil'>Hirak du 2019.</h1>
                </div>
                
                <div className='main-items'>
        {images.map(image => (
          <div className='items' key={image.id}><img className='item' src={image.image} key={image.id} alt={image.desc} onClick={() => this.setState({ photoIndex: image.id,isOpen: true })}></img></div>
        ))}

        {isOpen && (
          <Lightbox
            key={photoIndex}
            mainSrc={images[photoIndex].image}
            nextSrc={images[(photoIndex + 1) % images.length].image}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].image}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (this.state.photoIndex + 1) % images.length,
              })
            }
          />
        )}
          </div>
          <div className="items_suivant">

            <Link rel="canonical" to='/'>
            <div className="item_suivant">
              <img className="bg_suivant" src={imgLeft} alt="section portrait prise par Walid Khaladi" ></img>
              <h3 className="titre_suivant">Acceuil.</h3>
              <img className="icon_suivant" src={icoLeft} alt="icon left svg" width='50' height='50'></img>
            </div>
            </Link>

            <Link rel="canonical" to='/gallerie/portrait'>
            <div className="item_suivant">
              <img className="bg_suivant" src={imgRight} alt="section portrait prise par Walid Khaladi" ></img>
              <h3 className="titre_suivant">Portrait.</h3>
              <img className="icon_suivant" src={icoRight} alt="icon right svg" width='50' height='50'></img>
            </div>
            </Link>

          </div>
</div>       
        )
      }
}
