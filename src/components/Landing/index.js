import React from 'react';

const Landing = () => (
  <div className="container">
    <section class="hero">
      <div class="hero-body">
        <canvas id="canvasOne" height="155px" width="1334px">
          Your browser does not support HTML5 canvas.
        </canvas>
        <div class="container">
          <h1 class="title">
            Eureka! Books
          </h1>
          <h2 class="subtitle">
            Your fun, <strong>discovery-based</strong>, interactive-ish
            online introductory computer science textbook
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  </div>
);

export default Landing;