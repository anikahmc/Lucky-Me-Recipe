import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <section className="section section--left">
        <h1>Brand / Hero</h1>
        <p>Short, punchy copy. Fits cleanly without scroll.</p>
        <p>search bar here</p>
        <button>Lucky Me Button - i.e. recipe randomizer</button>
      </section>
{/* This section can be removed */}
      <section className="section section--right">
        <h2>Details / CTA</h2>
        <p>The section is where the content can render.</p>
      </section>
    </div>
  );
}

export default App;
