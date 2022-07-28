import "./contactForm.css"

function ContactForm() {


  return (
    <div className="contact-page__container">
      <div className="contact-form__container">
        <form 
          className="contact-form"
          name="contact-v2" 
          method="post" 
          data-netlify="true" 
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact-v2" />

          <div className="contact-form__input-container--left">

            <div className="contact-form__input">
              <label className="contact-form__input--label">Name <br />
                <input className="contact-form__input--text" type="text" name="name" />
              </label>
            </div>

            <div className="contact-form__input">
              <label className="contact-form__input--label">Email <br />
                <input className="contact-form__input--text" type="text" name="email" />
              </label>
            </div>

            <div className="contact-form__input">
              <label className="contact-form__input--label">Company <br />
                <input className="contact-form__input--text" type="text" name="company" />
              </label>
            </div>

          </div>

          <div className="contact-form__input-container--right">
            <div className="contact-form__input">
              <label className="contact-form__input--label">Message <br />
                <textarea className="contact-form__input--textarea" name="message"></textarea>
              </label>
            </div>

            <div className="contact-form-btn__container">
              <button className="contact-form-btn__container--submit" type="submit">Send</button>
            </div>
          
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm