import React, { Component } from "react"
import SEO from "../components/seo"
import img1 from '../images/contact/contact_1.jpg'
import { Redirect } from 'react-router-dom'


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", prenom: "", email: "", message: "", phone: "" }
  }

      /* Here’s the juicy bit for posting the form submission */

      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => {
            return <Redirect from="/contact" to="/thanks/" />
          })
          .catch(error => alert(error));
  
        e.preventDefault();
      };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    const { name, prenom, email, message, phone } = this.state;
    return (
        <>
            <SEO
          subtitle={"Contact"}
          title={"Walid Khaladi - Photographe Professionnel à Alger"}
          description={"Walid Khaladi est un Photographe Professionnel de mode et de célébrités qui réalise des portraits de magazines, des photographies publicitaires basé à Alger."}
          author={"@walidkhaladi"}
          url={"https://www.walidkhaladi.ml"}
          keywords={[
            `walidkhalladi`,
            `Walid`,
            `Khaladi`,
            `Contact`,
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
        <section>
        <div className='bg_items' >
            <img className='bg_apropos' src={img1} alt="Contact Envelop" />
            <h1  className='titre_acceuil'>Contact.</h1>
        </div>

          <div className="container-contact100">
            <div className="wrap-contact100">
              <form
                className="contact100-form validate-form"
                name="contact"
                method="post"
                action="/thanks"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                noValidate
                netlify
              >
                <span className="contact100-form-title">
                  Envoie-nous un message
                </span>
                <p className="txt4">
                  <strong>POUR LES ENQUÊTES GÉNÉRALES</strong> - Veuillez
                  utiliser le formulaire de contact ci-dessous.
                </p>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>

                <label className="label-input100" htmlFor="first-name">
                  votre Prénom *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Type first name"
                >
                  <input
                    id="first-name"
                    className="input100"
                    type="prenom"
                    name="prenom"
                    value={prenom}
                    placeholder="Prénom"
                    onChange={this.handleChange}
                    required
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="last-name">
                  votre Nom *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Type last name"
                >
                  <input
                    className="input100"
                    type="name"
                    name="name"
                    value={name}
                    placeholder="Nom"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="email">
                  votre Email *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="example@email.com"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="phone">
                  votre Numéro *
                </label>
                <div className="wrap-input100">
                  <input
                    id="phone"
                    className="input100"
                    type="phone"
                    name="phone"
                    value={phone}
                    placeholder="+1 800 000000"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="message">
                  Message *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    id="message"
                    className="input100"
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Écrivez-nous un message"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

        

                <div className="container-contact100-form-btn">
                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn" type="submit">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
              <div className="contact100-more flex-col-c-m" id="bg-contact">
                <div className="flex-w size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-map-marker" />
                  </div>

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Adresse Postale</span>

                    <span className="txt2">
                      Avenue Askri Ahcene, Oued Koriche - Alger, 16000 DZ
                    </span>
                  </div>
                </div>

                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-phone-handset" />
                  </div>

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Notre Numéro</span>

                    <span className="txt3">+1 800 1236879</span>
                  </div>
                </div>

                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-envelope" />
                  </div>

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Support Général</span>

                    <span className="txt3">walid5420@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" />
        </section>
        </>
    )
  }
}
