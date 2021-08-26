import React from "react";
import './navigation.css';

export const Navigation = () => {
    return (
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/RazzBerryMand"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://codepen.com" target="_blank" rel="noreferrer">
              Codepen
            </a>
          </li>
        </ul>
      </nav>
    );
};