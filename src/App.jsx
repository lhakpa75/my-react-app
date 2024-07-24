import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <a href="#" className="logo">
          Project 3
        </a>
      </header>
      <h1>Html & Css</h1>
      <p>Learn how to code!!</p>
      <nav className="menu">
        <ul>
          <li className="nav">
            <a href="#">Home</a>
          </li>
          <li className="nav">
            <a href="#">About</a>
          </li>
          <li className="nav">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <article>
        <section>
          <div className="main">
            To build websites, you should know about HTML — the fundamental
            technology used to define the structure of a webpage. HTML is used
            to specify whether your web content should be recognized as a
            paragraph, list, heading, link, image, multimedia player, form, or
            one of many other available elements or even a new element that you
            define.
          </div>
        </section>
        <aside>
          <p>
            Before starting this topic, you should have at least basic
            familiarity with using computers and using the web passively{" "}
          </p>
        </aside>
      </article>
    </>
  );
}

export default App;
