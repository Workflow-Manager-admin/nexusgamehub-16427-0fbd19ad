import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// PUBLIC_INTERFACE
function Layout({ children }) {
  return (
    <div className="app">
      <div className="background-overlay">
        <div className="main-content-wrapper">
          {/* Placeholder: Header and nav will be custom integrated later */}
          <header className="arcade-header">
            Arcade Nexus
          </header>
          <nav className="main-navbar">
            {/* Placeholder for actual nav links & login UI */}
            <span className="nav-link"><a href="/">Home</a></span>
            <span className="nav-link"><a href="/games">Games</a></span>
            <span className="nav-link"><a href="/login">Login/Sign Up</a></span>
          </nav>
          <main className="main-content">{children}</main>
          <footer className="copyright-bar">
            © Arcade Nexus/NexusGameHub {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Home() {
  return (
    <section className="page home-page">
      <h1 className="page-title">Welcome to Arcade Nexus!</h1>
      <p className="lead-text">
        Discover, buy, and play top games in our digital playground. <br />
        Get started by exploring our selection or <a href="/login" className="cta-link">log in</a> to your account!
      </p>
    </section>
  );
}

// PUBLIC_INTERFACE
function Games() {
  return (
    <section className="page games-page">
      <h1 className="page-title">Games Library</h1>
      <p className="lead-text">(Coming Soon) View and purchase from our selection of digital games.</p>
    </section>
  );
}

// PUBLIC_INTERFACE
function LoginSignUp() {
  return (
    <section className="page auth-page">
      <h1 className="page-title">Login / Sign Up</h1>
      <p className="lead-text">(Placeholder) Securely access Arcade Nexus or create a new account.</p>
    </section>
  );
}

// PUBLIC_INTERFACE
function Purchase() {
  return (
    <section className="page purchase-page">
      <h1 className="page-title">Purchase / Payment</h1>
      <p className="lead-text">(Placeholder) Complete your game purchase here. Payment simulation coming soon.</p>
    </section>
  );
}

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
