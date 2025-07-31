import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../pagescss/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: null, // Clear error on user input
    }));
    setSubmitSuccess(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission (e.g., API call)
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }, 1500);
  };

  return (
    <section className="contact-section">
      <div className="container1">
        <div className="content-wrapper">
          <h2 className="title">Contact Us</h2>
          <p className="subtitle">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>

          <div className="content-grid">
            {/* Form Section */}
            <div className="form-wrapper">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="FirstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? "input-error" : ""}
                      aria-describedby={
                        errors.firstName ? "error-firstName" : undefined
                      }
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName && (
                      <small id="error-firstName" className="error-text">
                        {errors.firstName}
                      </small>
                    )}
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="LastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? "input-error" : ""}
                      aria-describedby={
                        errors.lastName ? "error-lastName" : undefined
                      }
                      aria-invalid={errors.lastName ? "true" : "false"}
                    />
                    {errors.lastName && (
                      <small id="error-lastName" className="error-text">
                        {errors.lastName}
                      </small>
                    )}
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@google.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <small id="error-email" className="error-text">
                      {errors.email}
                    </small>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 3456789"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "input-error" : ""}
                    aria-describedby={errors.phone ? "error-phone" : undefined}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <small id="error-phone" className="error-text">
                      {errors.phone}
                    </small>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Leave a comment..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "input-error" : ""}
                    aria-describedby={
                      errors.message ? "error-message" : undefined
                    }
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <small id="error-message" className="error-text">
                      {errors.message}
                    </small>
                  )}
                </div>

                <p className="terms-text">
                  By submitting this form you agree to our{" "}
                  <a href="#" className="link">
                    terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="link">
                    privacy policy
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitSuccess && (
                  <p
                    style={{ color: "#4BB543", marginTop: "1rem", fontWeight: "600" }}
                    role="alert"
                  >
                    Your message has been sent successfully!
                  </p>
                )}
              </form>
            </div>

            {/* Information Section */}
            <div className="info-wrapper">
              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <h3>Address</h3>
                  <p>SYSTEMS LIMITED </p>
                  <p>Sejpal road Lahore , Zip Code: 54000</p>
                </div>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="icon" />
                <div>
                  <h3>Call Us</h3>
                  <p>
                    Call us to speak to a member of our team. We are always happy
                    to help.
                  </p>
                  <p className="phone-number">+92-3096107599</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
