import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


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

import img24 from '../images/nature/1_nature.jpg'
import img25 from '../images/nature/2_nature.jpg'
import img26 from '../images/nature/3_nature.jpg'
import img27 from '../images/nature/4_nature.jpg'
import img28 from '../images/nature/5_nature.jpg'
import img29 from '../images/nature/6_nature.jpg'
import img30 from '../images/nature/7_nature.jpg'
import img31 from '../images/nature/8_nature.jpg'
import img32 from '../images/nature/9_nature.jpg'
import img33 from '../images/nature/10_nature.jpg'
import img34 from '../images/nature/11_nature.jpg'
import img35 from '../images/nature/12_nature.jpg'
import img36 from '../images/nature/13_nature.jpg'
import img37 from '../images/nature/14_nature.jpg'
import img38 from '../images/nature/15_nature.jpg'

import img39 from '../images/evenement/1_evenement.jpg'
import img40 from '../images/evenement/2_evenement.jpg'
import img41 from '../images/evenement/3_evenement.jpg'
import img42 from '../images/evenement/4_evenement.jpg'
import img43 from '../images/evenement/5_evenement.jpg'
import img44 from '../images/evenement/6_evenement.jpg'
import img45 from '../images/evenement/7_evenement.jpg'
import img46 from '../images/evenement/8_evenement.jpg'
import img47 from '../images/evenement/9_evenement.jpg'
import img48 from '../images/evenement/10_evenement.jpg'
import img49 from '../images/evenement/11_evenement.jpg'

import img50 from '../images/hirak/14.jpg'
import img51 from '../images/hirak/15.jpg'
import img52 from '../images/hirak/16.jpg'
import img53 from '../images/hirak/17.jpg'
import img54 from '../images/hirak/18.jpg'
import img55 from '../images/hirak/19.jpg'
import img56 from '../images/hirak/20.jpg'


const images = [
  {
    image: img2,
    id: 0,
    desc: `Portrait`,
  },
  {
    image: img3,
    id: 1,
    desc: `Portrait`,
  },
  {
    image: img4,
    id: 2,
    desc: `Portrait`,
  },
  {
    image: img5,
    id: 3,
    desc: `Portrait`,
  },
  {
      image: img6,
      id: 4,
      desc: `Portrait`,
  },
  {
      image: img7,
      id: 5,
      desc: `Portrait`,
  },
  {
      image: img8,
      id: 6,
      desc: `Portrait`,
  },
  {
      image: img9,
      id: 7,
      desc: `Portrait`,
  },
  {
      image: img10,
      id: 8,
      desc: `Portrait`,
  },
  {
      image: img11,
      id: 9,
      desc: `Portrait`,
  },
  {
      image: img12,
      id: 10,
      desc: `Portrait`,
  },
  {
      image: img13,
      id: 11,
      desc: `Portrait`,
  },
  {
      image: img14,
      id: 12,
      desc: `Portrait`,
  },
  {
      image: img15,
      id: 13,
      desc: `Portrait`,
  },
  {
      image: img16,
      id: 14,
      desc: `Portrait`,
  },
  {
      image: img17,
      id: 15,
      desc: `Portrait`,
  },
  {
      image: img18,
      id: 16,
      desc: `Portrait`,
  },
  {
      image: img19,
      id: 17,
      desc: `Portrait`,
  },
  {
      image: img20,
      id: 18,
      desc: `Portrait`,
  },
  {
      image: img21,
      id: 19,
      desc: `Portrait`,
  },
  {
      image: img22,
      id: 20,
      desc: `Portrait`,
  },
  {
      image: img23,
      id: 21,
      desc: `Portrait`,
  },
  {
    image: img24,
    id: 22,
    desc: `Nature`,
  },
  {
    image: img25,
    id: 23,
    desc: `Nature`,
  },
  {
    image: img26,
    id: 24,
    desc: `Nature`,
  },
  {
    image: img27,
    id: 25,
    desc: `Nature`,
  },
  {
    image: img28,
    id: 26,
    desc: `Nature`,
  },
  {
    image: img29,
    id: 27,
    desc: `Nature`,
  },
  {
    image: img30,
    id: 28,
    desc: `Nature`,
  },
  {
    image: img31,
    id: 29,
    desc: `Nature`,
  },
  {
    image: img32,
    id: 30,
    desc: `Nature`,
  },
  {
    image: img33,
    id: 31,
    desc: `Nature`,
  },
  {
    image: img34,
    id: 32,
    desc: `Nature`,
  },
  {
    image: img35,
    id: 33,
    desc: `Nature`,
  },
  {
    image: img36,
    id: 34,
    desc: `Nature`,
  },
  {
    image: img37,
    id: 35,
    desc: `Nature`,
},
{
  image: img38,
  id: 36,
  desc: `Nature`,
  },
  {
    image: img39,
    id: 37,
    desc: `Évènement`,
  },
  {
    image: img40,
    id: 38,
    desc: `Évènement`,
  },
  {
    image: img41,
    id: 39,
    desc: `Évènement`,
  },
  {
    image: img42,
    id: 40,
    desc: `Évènement`,
  },
  {
    image: img43,
    id: 41,
    desc: `Évènement`,
  },
  {
    image: img44,
    id: 42,
    desc: `Évènement`,
  },
  {
    image: img45,
    id: 43,
    desc: `Évènement`,
  },
  {
    image: img46,
    id: 44,
    desc: `Évènement`,
  },
  {
    image: img47,
    id: 45,
    desc: `Évènement`,
  },
  {
    image: img48,
    id: 46,
    desc: `Évènement`,
  },
  {
    image: img49,
    id: 47,
    desc: `Évènement`,
  },
  {
    image: img50,
    id: 48,
    desc: `Hirak`,
  },
  {
    image: img51,
    id: 49,
    desc: `Hirak`,
  },
  {
    image: img52,
    id: 50,
    desc: `Hirak`,
  },
  {
    image: img53,
    id: 51,
    desc: `Hirak`,
  },
  {
    image: img54,
    id: 52,
    desc: `Hirak`,
  },
  {
    image: img55,
    id: 53,
    desc: `Hirak`,
  },
  {
    image: img56,
    id: 54,
    desc: `Hirak`,
  },
];


export default class LightboxEx extends Component {
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
      <div className="container">
        <div className='main-items2'>
      {images.map(image => (
        <div className='location-listing' key={image.id}>
          <div className="location-title">
              <span role="img" aria-label="emoji" className="description-img">
                📸 {image.desc}
              </span>
          </div>
          <div className="location-image">
            <div id="container-img">
            <img className='location-image' src={image.image} key={image.id} title={image.desc} alt={" images prise par walid khaladi, contient un ou plusieur personnes"} onClick={() => this.setState({ photoIndex: image.id, isOpen: true })}>
          </img>
            </div>
          </div>
        </div>
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
      </div>
    );
  }
}