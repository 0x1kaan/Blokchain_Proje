import React, { useState } from "react";
import "./App.css";

const App = () => {
  const posts = [
    // Add your posts data here
  ];

  const [postsState] = useState(posts);

  return (
    <div>
      <header className="header">
        <nav className="nav-menu">
          <ul>
            <h1>CollectiveDAO</h1>
            <li><a href="#home">Product</a></li>
            <li><a href="#Explore">Use cases</a></li>
            <li><a href="#Notification">Learn</a></li>
            <li><a href="#profile">About</a></li>
            <li><a href="#profile">Jobs</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>The easiest way to start a DAO</h1>
            <p>
              An all-in-one platform to start, manage and grow a decentralized autonomous organization
            </p>
            <div className="cta-buttons">
              <a href="Dao.html" className="cta-button">Get Started</a>
            </div>
          </div>
        </section>

        <section id="ready-for-every-project">
          <h2>Ready for Every Project</h2>
          <div className="button-group">
            <div className="top-row">
              <button className="cta-button">Investment DAO</button>
              <button className="cta-button">Startup DAO</button>
              <button className="cta-button">Service DAO</button>
              <button className="cta-button">Community DAO</button>
            </div>
            <div className="bottom-row">
              <button className="cta-button">Impact DAO</button>
              <button className="cta-button">DeFi DAO</button>
              <button className="cta-button">+ More</button>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/resim.png`} 
            alt="Dikdörtgen resim" 
            style={{ width: '1000px', height: '500px', objectFit: 'cover' }} 
          />
        </section>

        <section id="posts">
          <ul className="posts-list">
            {postsState.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Başka İçerikler */}
      <div className="headings-container">
        <h2 className="heading-first-heading">Designed for the full journey</h2>
        <h2 className="heading">Organization design</h2>
        <h2 className="heading">Smart contract development</h2>
        <h2 className="heading">Fundraising</h2>
        <h2 className="heading">Launch marketing</h2>
        <h2 className="heading">Member onboarding</h2>
        <h2 className="heading">Contributor management</h2>
        <h2 className="heading">DAO operations</h2>
      </div>

      <div className="button-group-inline">
        <button className="button-inline">NFT Membership</button>
        <button className="button-inline">Member Directory</button>
        <button className="button-inline">Treasury</button>
        <button className="button-inline">Feed</button>
        <button className="button-inline">Governance</button>
        <button className="button-inline">App Store</button>
      </div>

      <section>
        <img 
          src={`${process.env.PUBLIC_URL}/resim2.png`} 
          alt="Resim 2" 
        />
      </section>

      <div className="cta-buttons">
        <a href="#watch-video" className="cta-button">
          <img 
           src={`${process.env.PUBLIC_URL}/video img.png`}
            alt="" 
            className="button-image" 
          />
          Watch Video
        </a>
      </div>

      <h1>Works With</h1>
      <div className="button-group">
        <div className="feature-item">
          <button className="feature-button">
            <img src={`${process.env.PUBLIC_URL}/resim3.png`} alt="Ethereum" className="button-image" />
          </button>
          <h3>Ethereum</h3>
        </div>

        <div className="feature-item">
          <button className="feature-button">
            <img src={`${process.env.PUBLIC_URL}/resim4.png`} alt="Polygon" className="button-image" />
          </button>
          <h3>Polygon</h3>
        </div>

        <div className="feature-item">
          <button className="feature-button">
            <img src={`${process.env.PUBLIC_URL}/resim5.png`} alt="Gnosis Safe" className="button-image" />
          </button>
          <h3>Gnosis Safe</h3>
        </div>

        <div className="feature-item">
          <button className="feature-button">
            <img src={`${process.env.PUBLIC_URL}/resim6.png`} alt="Snapshot" className="button-image" />
          </button>
          <h3>Snapshot</h3>
        </div>

        <div className="feature-item">
          <button className="feature-button">
            <img src={`${process.env.PUBLIC_URL}/resim7.png`} alt="ENS" className="button-image" />
          </button>
          <h3>ENS</h3>
        </div>

        <div className="feature-item">
          <button className="feature-button">
            <img src={`${process.env.PUBLIC_URL}/resim8.png`} alt="OpenSea" className="button-image" />
          </button>
          <h3>OpenSea</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
