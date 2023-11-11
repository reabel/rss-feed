// src/components/RssReader.tsx
import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

interface RssItem {
  guid?: string;
  title?: string;
  link?: string;
  contentSnippet?: string;
}

function RssReader() {
  const [rssItems, setRssItems] = useState<RssItem[]>([]);

  useEffect(() => {
    const fetchRssFeed = async () => {
      const parser = new Parser();
      const feed = await parser.parseURL('https://example.com/rss-feed'); // Replace with your RSS feed URL
      setRssItems(feed.items.map((item)=>{
        return {
          guid: item.guid,
          title: item.title,
          link: item.link,
          contentSnippet: item.contentSnippet,
        }
      }));
    };

    fetchRssFeed();
  }, []);

  return (
    <div>
      <h1>RSS Feed Reader</h1>
      <ul>
        {rssItems.map((item) => (
          <li key={item.guid}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.contentSnippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RssReader;
