import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-kicker">Commercial cleaning specialists</span>
            <h1 className="hero-headline">
              Professional Cleaning in Warri You Can Trust
            </h1>
            <p className="hero-subheadline">
              Enterprise-grade cleaning solutions for offices, facilities, and businesses.
              From daily maintenance to specialized commercial contracts, our team delivers
              reliability, consistency, and excellence.
            </p>

            <div className="hero-ctas">
              <button className="btn btn-primary">
                Request a Quote
              </button>
              <button className="btn btn-secondary">
                View Services
              </button>
            </div>

            <div className="trust-indicators">
              <div className="indicator">
                <span className="indicator-number">24/7</span>
                <span className="indicator-text">Flexible support</span>
              </div>
              <div className="indicator">
                <span className="indicator-number">98%</span>
                <span className="indicator-text">Client retention</span>
              </div>
              <div className="indicator">
                <span className="indicator-number">5+</span>
                <span className="indicator-text">Service sectors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/ladytwo.png" alt="Professional Cleaner" className="cleaner-image" />
        </div>
      </div>
    </section>
  )
}
