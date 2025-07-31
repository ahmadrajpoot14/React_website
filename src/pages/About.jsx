import { Link } from "react-router-dom";
import "../pagescss/about.css";

const About = () => {
  const people = [
    {
      name: "Ahmad Ali",
      role: "CEO",
      imageUrl: "/images/ahmad.jpg",
    },
    {
      name: "Malik Ubair",
      role: "CTO",
      imageUrl: "/images/malik.jpg",
    },
  ];

  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h2>Elevating Men’s Style with CBR Vibes</h2>
              <p>
                CBR Vibes is your premier destination for high-quality men’s
                jewelry including chains, bracelets, and rings. Our curated
                collection combines modern designs with timeless craftsmanship,
                empowering you to express your unique vibe with confidence.
              </p>
              <Link to="/shop">
                <button className="btn-primary">Explore CBR Vibes</button>
              </Link>
            </div>
            <div className="hero-image-wrapper">
              <img
                src="/images/mens-jewelry-wrapper.webp"
                alt="CBR Vibes - Men's Jewelry Collection"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="team-section">
        <div className="container team-container">
          <div className="team-info">
            <h2>Our Team</h2>
            <p>
              At CBR Vibes, we are passionate about style and quality. Meet the
              visionary leaders driving our brand forward.
            </p>
          </div>
          <ul className="team-list">
            {people.map((person) => (
              <li key={person.name} className="team-member">
                <div className="team-member-inner">
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="team-member-photo"
                  />
                  <div>
                    <h3 className="team-member-name">{person.name}</h3>
                    <p className="team-member-role">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
