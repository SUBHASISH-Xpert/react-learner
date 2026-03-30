import React from 'react'

const Home = () => {
  return (
    <div className="container page">
        <h1>Welcome to Our Website</h1>
        <p className="page-description">Discover amazing features and explore our services. We're here to provide you with the best experience possible.</p>

        <div className="features-grid">
            <div className="feature-card">
                <h3>Fast & Reliable</h3>
                <p>Experience lightning-fast performance with our optimized platform.</p>
            </div>
            <div className="feature-card">
                <h3>User Friendly</h3>
                <p>Intuitive design that makes navigation simple and enjoyable.</p>
            </div>
            <div className="feature-card">
                <h3>24/7 Support</h3>
                <p>Our dedicated team is always ready to help you succeed.</p>
            </div>
        </div>

        <div className="cta-section">
            <h2>Get Started Today</h2>
            <p>Join thousands of satisfied users who trust our platform.</p>
            <button className="cta-button">Learn More</button>
        </div>
    </div>
  )
}

export default Home