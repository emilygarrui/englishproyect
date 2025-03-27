import React from "react";
import rssNews from "../../services/RssNews";
import "./RSSPage.css";

function RSSPage() {
  return (
    <div className="rss-page">
      <h1>Últimas Noticias sobre Whisky</h1>
      <div className="news-grid">
        {rssNews.map((news) => (
          <article key={news.id} className="news-card">
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <time>{news.date}</time>
            <a href={news.link} className="read-more">Leer más</a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default RSSPage;