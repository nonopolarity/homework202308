import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>About the Program</h1>
      <main>
        <figure className="hero">
          <img src="/images/rover_hero.jpg" />
          <figcaption>Curiosity rover image</figcaption>
        </figure>

        <section className="intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            ultrices mi sit amet viverra. Vestibulum commodo nulla sit amet
            nulla molestie, ut sollicitudin arcu laoreet. Ut lorem urna,
            vulputate ut mauris sed, hendrerit tempor nulla. Sed nisl nisl,
            pretium vitae vehicula id, tempor sit amet nisi. Duis vitae augue
            vitae erat volutpat iaculis a ut purus. Duis porta nec ex vitae
            consectetur. Praesent dolor lorem, auctor quis tempus eu, pharetra
            in odio. Vestibulum non libero fringilla, lobortis dolor nec, tempor
            velit. Vivamus euismod massa et orci tincidunt tincidunt. Vivamus
            fringilla nibh vel arcu malesuada feugiat. In hac habitasse platea
            dictumst. Morbi feugiat erat neque, sed posuere augue interdum eu.
          </p>
          <p>
            Phasellus ac imperdiet neque, at vestibulum tortor. Ut sed blandit
            ante. Vestibulum eu libero eros. Praesent venenatis dictum faucibus.
            Aliquam erat volutpat. Proin sollicitudin varius urna viverra
            ultricies. 
          </p>
          
          <nav class="other-pages">
            <button>View Images By Dates</button>
            <button>View Weather</button>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
