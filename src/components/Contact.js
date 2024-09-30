import React from 'react'
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="text-center m-4">
      <h2 className="text-center my-5">Contact Me</h2>

      <div className="container">
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
            />
          </div>
          <div className="col-md-12">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
              style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Your message..."
              required
              style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-40 px-4 py-2" type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <div id="contactIcon" className="d-flex justify-content-center gap-6">
        <a href="mailto:ajeeth10gc@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={50} style={{ color: "#00aaff" }} />
        </a>

        <a href="https://www.linkedin.com/in/selvaajeeths" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} className="text-light-Blue" />
        </a>

        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={50} style={{ color: "#fc0f95" }} />
        </a>
      </div>
    </section>
  )
}

export default Contact