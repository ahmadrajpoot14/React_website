import { Parallax } from "react-parallax";
import {  FaShippingFast, FaShieldAlt, FaUsers, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../pagescss/home.css";

const Home = () => {

    const featuresData = [
        {
            icon: "chain.webp",
            title: "Durable Chains",
            desc: "Crafted to last with bold style and premium materials."
        },
        {
            icon: "bracelet.webp",
            title: "Stylish Bracelets",
            desc: "Make a statement with our exclusive bracelet designs."
        },
        {
            icon: "ring.avif",
            title: "Signature Rings",
            desc: "Express your individuality with our unique rings."
        }
    ];
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section">
                <video className="background-video" autoPlay loop muted playsInline>
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="hero-content">
                    <h1>Where Chains Seduce, Bracelets Speak, and Rings Reign.</h1>
                    <Link to="/#features" className="hero-button">Shop Now</Link>
                </div>

                {/* Features strip inside hero */}
                <div className="hero-features-strip">
                    <div className="hero-feature-item">
                        <FaShippingFast className="feature-icon" />
                        <h4>FREE SHIPPING NATIONWIDE</h4>
                        <p>Enjoy cost-free standard shipping</p>
                    </div>
                    <div className="hero-feature-item">
                        <FaShieldAlt className="feature-icon" />
                        <h4>LIFETIME WARRANTY</h4>
                        <p>Perpetual product protection on limited materials</p>
                    </div>
                    <div className="hero-feature-item">
                        <FaUsers className="feature-icon" />
                        <h4>100,000+ COMMUNITY</h4>
                        <p>Our #1 priority is the community’s trust and reliability</p>
                    </div>
                    <div className="hero-feature-item">
                        <FaLock className="feature-icon" />
                        <h4>SECURE PAYMENTS</h4>
                        <p>Protected transactions with encrypted data for financial safety</p>
                    </div>
                </div>
            </div>


            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="features-header">
                    <span>Why Choose CBR Jewelry</span>
                    <h2>Elevate Your Style with CBR Collections</h2>
                    <p>Our pieces blend bold craftsmanship with modern design for the perfect statement.</p>
                </div>

                <div className="feature-images-row">
                    <Link to="/new-releases" className="feature-image-link">
                        <img src="/images/chain.webp" alt="New Releases" />
                        <h3>NEW RELEASES</h3>
                        <p>Discover our latest and freshest jewelry collections.</p>
                    </Link>

                    <Link to="/russet-x" className="feature-image-link">
                        <img src="/images/bracelet.webp" alt="Russet X" />
                        <h3>CBR VIBES X</h3>
                        <p>Explore our signature CBR collection for bold style.</p>
                    </Link>

                    <Link to="/aw-icons" className="feature-image-link">
                        <img src="/images/ring.avif" alt="A/W Icons" />
                        <h3>Feel the Pulse of Every Vibe</h3>
                        <p>Check out the coolest vibes and stay in the flow with CBR VIBES.</p>

                    </Link>
                </div>
            </section>

            {/* Parallax Image Section */}
            <Parallax className="parallax-container" bgImage="/images/web.webp" strength={700}>
                <div className="parallax-overlay">
                    <div className="parallax-content">
                        <h1>Unleash Your Creativity</h1>
                        <Link to="/explore" className="explore-button">Explore</Link>
                    </div>
                </div>
            </Parallax>

            <section className="our-story-container">
                <h2>OUR STORY</h2>
                <p>
                    At CBR Vibes, we craft premium men's jewelry designed to elevate your style and confidence. Our collection blends timeless elegance with bold designs to help you express your unique vibe.
                </p>
                <h3>CRAFTED WITH PASSION</h3>
                <p>
                    Each piece is meticulously created with the finest materials, ensuring durability and sophistication. We believe jewelry is more than an accessory—it's a statement of identity and pride.
                </p>
                <h3>EMBRACE YOUR STYLE</h3>
                <p>
                    Whether you’re dressing for a special occasion or everyday swagger, CBR Vibes is your trusted partner in redefining men’s fashion jewelry. Stand out, break the mold, and wear your vibe proudly.
                </p>
            </section>

           
        </>
    );
};

export default Home;
