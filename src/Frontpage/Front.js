import React from 'react'
import "./Front.css";

const Front = () => {
    return (
      <>
        <header>
          <h1>Welcome to the Front Page</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="home">
            <h2>Home</h2>
            <p>This is the front page.</p>
          </section>
          <section id="about">
            <h2>About</h2>
            <p>Information about us.</p>
          </section>
          <section id="services">
            <h2>Services</h2>
            <p>Details of services we offer.</p>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p>How to get in touch.</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Front Page Inc.</p>
        </footer>
      </>
    );
  };
  
  export default Front;
