import React, { Component } from "react"
import SEO from "../components/seo"
import Recaptcha from "react-google-recaptcha"
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
cors();

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Secontact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })

  }

  render() {
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
          <div className="animation-box">
            <h1 className="text-effect" style={{ color: "teal" }}>
              Contact
            </h1>
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

                <label className="label-input100" for="first-name">
                  votre Prénom *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Type first name"
                >
                  <input
                    id="first-name"
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Prénom"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" for="last-name">
                  votre Nom *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Type last name"
                >
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Nom"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" for="email">
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
                    placeholder="example@email.com"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" for="phone">
                  votre Numéro *
                </label>
                <div className="wrap-input100">
                  <input
                    id="phone"
                    className="input100"
                    type="text"
                    name="phone"
                    placeholder="+1 800 000000"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" for="message">
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
                    placeholder="Écrivez-nous un message"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <Recaptcha
                  ref="recaptcha"
                  sitekey={RECAPTCHA_KEY}
                  onChange={this.handleRecaptcha}
                />

                <p className="container-contact100-form-btn">
                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn" type="submit">
                      Envoyer
                    </button>
                  </div>
                </p>
              </form>
              <div className="contact100-more flex-col-c-m" id="bg-contact">
                <div className="flex-w size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-map-marker" />
                  </div>

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Adresse Postale</span>

                    <span className="txt2">
                      61 Rue Saint-Honoré, Paris France
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

                    <span className="txt3">contact@example.com</span>
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
