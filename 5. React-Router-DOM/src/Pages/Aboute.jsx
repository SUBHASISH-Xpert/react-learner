import React from 'react'

const Aboute = () => {
  return (
    <div className="container page">
        <h1>About Our Company</h1>
        <p className="page-description">We are a passionate team dedicated to creating innovative solutions that make a difference in people's lives.</p>

        <div className="about-content">
            <div className="about-section">
                <h2>Our Mission</h2>
                <p>To empower businesses and individuals with cutting-edge technology that simplifies complex processes and enhances productivity.</p>
            </div>

            <div className="about-section">
                <h2>Our Vision</h2>
                <p>To be the leading provider of user-centric digital solutions, fostering innovation and driving positive change in the industry.</p>
            </div>

            <div className="about-section">
                <h2>Our Values</h2>
                <ul className="values-list">
                    <li><strong>Innovation:</strong> Constantly pushing boundaries to deliver better solutions</li>
                    <li><strong>Quality:</strong> Maintaining the highest standards in everything we do</li>
                    <li><strong>Integrity:</strong> Building trust through honest and transparent practices</li>
                    <li><strong>Collaboration:</strong> Working together to achieve shared goals</li>
                </ul>
            </div>
        </div>

        <div className="team-preview">
            <h2>Meet Our Team</h2>
            <p>Our diverse team brings together expertise from various fields to deliver exceptional results.</p>
        </div>
    </div>
  )
}

export default Aboute