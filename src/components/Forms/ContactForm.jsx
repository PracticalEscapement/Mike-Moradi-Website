import "./contactForm.css"

function ContactForm() {


  return (
      <form 
        className="name-label"
        name="contact-v1" 
        method="post" 
        data-netlify="true" 
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact-v1" />

        <div>
          <label>First Name <br />
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label>Email <br />
            <input type="text" name="email" />
          </label>
        </div>

        <div>
          <label>Message <br />
            <textarea name="message"></textarea>
          </label>
        </div>

        <button type="submit">Send</button>

      </form>
  )
}

export default ContactForm