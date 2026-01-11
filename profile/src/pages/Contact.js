import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch("https://formspree.io/f/xrborkgg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Thank you for Contacting!",
            text: "Will get back to you soon.",
            confirmButtonColor: "#29b6f6",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#29b6f6",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#29b6f6",
        });
      });
  };

  return (
    <div className="contact-page" style={{ padding: "32px 0" }}>
      <h2 className="contact-title" style={{ color: "#205081", fontWeight: "bold", fontSize: "2.2rem", marginBottom: 8 }}>
        Contact
      </h2>
      <div style={{ width: 70, height: 4, background: "#29b6f6", borderRadius: 2, marginBottom: 24 }}></div>
      <p style={{ color: "#222", fontSize: "1.13rem", marginBottom: 32, maxWidth: 900 }}>
        I'm open to new opportunities and collaborations. Use the contact form or the details on the left to reach out — I'll respond as
        soon as I can.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        <div style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 32, minWidth: 320, maxWidth: 400, flex: "1 1 340px", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 24 }}>
            <div style={{ background: "#e3f3fc", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16 }}>
              <i className="fas fa-map-marker-alt" style={{ color: "#29b6f6", fontSize: 20 }} />
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: 18 }}>Location:</div>
              <div style={{ color: "#444", fontSize: 15 }}>Chennai, Tamil Nadu, India</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 24 }}>
            <div style={{ background: "#e3f3fc", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16 }}>
              <i className="fas fa-envelope" style={{ color: "#29b6f6", fontSize: 20 }} />
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: 18 }}>Email:</div>
              <div style={{ color: "#444", fontSize: 15 }}>
                <a href="mailto:jagatheeshjack07@gmail.com" title="Send email" style={{ color: "#444", textDecoration: "none" }}>jagatheeshjack07@gmail.com</a>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 24 }}>
            <div style={{ background: "#e3f3fc", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16 }}>
              <i className="fas fa-phone" style={{ color: "#29b6f6", fontSize: 20 }} />
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: 18 }}>Call:</div>
              <div style={{ color: "#444", fontSize: 15 }}>
                <a href="tel:+916383329450" title="Call" style={{ color: "#444", textDecoration: "none" }}>+91 63833 29450</a>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 6px rgba(32,33,36,0.28)", marginTop: 16 }}>
            <iframe
              title="Chennai Map"
              src="https://www.google.com/maps?q=Chennai,+Tamil+Nadu,+India&output=embed"
              width="100%"
              height="180"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 32, minWidth: 320, maxWidth: 500, flex: "1 1 340px", marginBottom: 24 }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <input name="name" type="text" aria-label="Your name" placeholder="Your Name" style={{ flex: 1, padding: 10, borderRadius: 4, border: "1px solid #ccc", fontSize: 15 }} required />
              <input name="email" type="email" aria-label="Your email" placeholder="Your Email" style={{ flex: 1, padding: 10, borderRadius: 4, border: "1px solid #ccc", fontSize: 15 }} required />
            </div>

            <div style={{ marginBottom: 16 }}>
              <input name="subject" type="text" aria-label="Subject" placeholder="Subject" style={{ width: "100%", padding: 10, borderRadius: 4, border: "1px solid #ccc", fontSize: 15 }} required />
            </div>

            <div style={{ marginBottom: 24 }}>
              <textarea name="message" aria-label="Message" placeholder="Share your thoughts or sent your queries..." rows={6} style={{ width: "100%", padding: 10, borderRadius: 4, border: "1px solid #ccc", fontSize: 15, resize: "vertical" }} required />
            </div>

            <button type="submit" style={{ background: "#29b6f6", color: "#fff", border: "none", borderRadius: 4, padding: "10px 32px", fontSize: 16, fontWeight: "bold", cursor: "pointer" }}>
              Sent Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
