import React from 'react';
import './aboutUs.css'

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to [describe your project/business/organization].
        Our mission is to [briefly state your mission or purpose].
      </p>
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="[Team Member Image URL]" alt="[Team Member Name]" />
          <div className="member-info">
            <strong>[Team Member Name]</strong>
            <p>[Role/Position]</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </div>
      <h2>Our Story</h2>
      <p>
        [Briefly describe the history or story behind your project/business/organization. You can include information about when it was founded, why it was created, and any significant milestones.]
      </p>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Feel free to reach out to us at [contact information].
      </p>
    </div>
  );
};

export default AboutUsPage;
