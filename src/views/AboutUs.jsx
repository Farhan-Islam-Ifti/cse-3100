import React from "react";
import "./AboutPage.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <main className="about-main">
        <section id="mission" className="about-section">
          <h2>Our Mission</h2>
          <p>
           Our goal is to make sure everyone gets to adopt their dream cats for free, until there is more cats than atoms in the universe!
          </p>
        </section>

        <section id="history" className="about-section">
          <h2>Our History</h2>
          <p>
            We have been working with cats since our director darwin found out that we human are just an evolution of cats! Our manager and developer were the ones to find out that cats are cause of the existance of gravity!
          </p>
        </section>

        <section id="team" className="about-section">
          <h2>Our Team</h2>
          <div className="team-cards">
            <div className="card">
              <img
                src="/team-member1.jpg"
                alt="Darwin"
                className="team-image"
              />
              <h3>Darwin</h3>
              <p>Director</p>
            </div>
            <div className="card">
              <img
                src="/team-member2.jpg"
                alt="Issac Newton"
                className="team-image"
              />
              <h3>Issac Newton</h3>
              <p>Manager</p>
            </div>
            <div className="card">
              <img
                src="/team-member3.jpg"
                alt="Albert Einstein"
                className="team-image"
              />
              <h3>Albert Einstein</h3>
              <p>Developer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
