
import "../../../layoutcss/Footer.css";
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="links-row">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/product" className="footer-link">
            Products
          </Link>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
        </div>

        <div className="social-row">
          <a href="#" className="social-link" aria-label="Facebook">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://github.com/abubakarO1/AutoPartBazaar"
            className="social-link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a href="#" className="social-link" aria-label="YouTube">
            <FaYoutube className="social-icon" />
          </a>
        </div>

        <div className="copyright">
          © 2025 Ahmad website, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
