import React, { Component } from 'react'
import SEO from '../components/seo'
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import imgLeft from '../images/acceuil_1.jpg'
import imgRight from '../images/acceuil_3.jpg'
import img1 from '../images/acceuil_2.jpg'
import img2 from '../images/portrait/1_portrait.jpg'
import img3 from '../images/portrait/2_portrait.jpg'
import img4 from '../images/portrait/3_portrait.jpg'
import img5 from '../images/portrait/4_portrait.jpg'
import img6 from '../images/portrait/5_portrait.jpg'
import img7 from '../images/portrait/6_portrait.jpg'
import img8 from '../images/portrait/7_portrait.jpg'
import img9 from '../images/portrait/8_portrait.jpg'
import img10 from '../images/portrait/9_portrait.jpg'
import img11 from '../images/portrait/10_portrait.jpg'
import img12 from '../images/portrait/11_portrait.jpg'
import img13 from '../images/portrait/12_portrait.jpg'
import img14 from '../images/portrait/13_portrait.jpg'
import img15 from '../images/portrait/14_portrait.jpg'
import img16 from '../images/portrait/15_portrait.jpg'
import img17 from '../images/portrait/16_portrait.jpg'
import img18 from '../images/portrait/17_portrait.jpg'
import img19 from '../images/portrait/18_portrait.jpg'
import img20 from '../images/portrait/19_portrait.jpg'
import img21 from '../images/portrait/20_portrait.jpg'
import img22 from '../images/portrait/21_portrait.jpg'
import img23 from '../images/portrait/22_portrait.jpg'

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
    {
        image: img9,
        id: 7,
        desc: `un truc de ouf`,
    },
    {
        image: img10,
        id: 8,
        desc: `un truc de ouf`,
    },
    {
        image: img11,
        id: 9,
        desc: `un truc de ouf`,
    },
    {
        image: img12,
        id: 10,
        desc: `un truc de ouf`,
    },
    {
        image: img13,
        id: 11,
        desc: `un truc de ouf`,
    },
    {
        image: img14,
        id: 12,
        desc: `un truc de ouf`,
    },
    {
        image: img15,
        id: 13,
        desc: `un truc de ouf`,
    },
    {
        image: img16,
        id: 14,
        desc: `un truc de ouf`,
    },
    {
        image: img17,
        id: 15,
        desc: `un truc de ouf`,
    },
    {
        image: img18,
        id: 16,
        desc: `un truc de ouf`,
    },
    {
        image: img19,
        id: 17,
        desc: `un truc de ouf`,
    },
    {
        image: img20,
        id: 18,
        desc: `un truc de ouf`,
    },
    {
        image: img21,
        id: 19,
        desc: `un truc de ouf`,
    },
    {
        image: img22,
        id: 20,
        desc: `un truc de ouf`,
    },
    {
        image: img23,
        id: 21,
        desc: `un truc de ouf`,
    },
    
  ];

export default class Portrait extends Component {
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
            subtitle={'Portrait'}
            title={"Walid Khaladi - Photographe Professionnel à Alger"}
                description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
                author={"@walidkhaladi"}
                url={"https://www.walidkhaladi.ml"}
                keywords={[
                    `walidkhalladi`,
                    `Walid`,
                    `Khaladi`,
                    `Portrait`,
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
                    <h1  className='titre_acceuil'>Portrait.</h1>
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

            <Link to='/gallerie/hirak'>
            <div className="item_suivant">
              <img className="bg_suivant" src={imgLeft} alt="section portrait prise par Walid Khaladi" ></img>
              <h3 className="titre_suivant">Hirak du 2019.</h3>
              <img className="icon_suivant" src={icoLeft} alt="icon left svg" width='40' height='40'></img>
            </div>
            </Link>

            <Link to='/gallerie/nature'>
            <div className="item_suivant">
              <img className="bg_suivant" src={imgRight} alt="section portrait prise par Walid Khaladi" ></img>
              <h3 className="titre_suivant">Nature.</h3>
              <img className="icon_suivant" src={icoRight} alt="icon right svg" width='40' height='40'></img>
            </div>
            </Link>

          </div>
</div>       
        )
      }
}
