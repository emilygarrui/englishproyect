import React from "react";
import "./RSSPage.css";

function RSSPage() {
  return (
    <div className="rss-page">
      <h1>Últimas noticias sobre whisky</h1>
      <p>
        Explora las últimas noticias y artículos sobre el mundo del whisky:
      </p>
      <a
        href="https://todowhisky.es/"
        target="_blank"
        rel="noopener noreferrer"
        className="rss-link"
      >
        Ver noticias
      </a>
    </div>
  );
}

export default RSSPage;