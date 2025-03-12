const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const { detectFakeNews } = require('./fakeNewsDetector');

const app = express();
app.use(bodyParser.json());

// Load environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Enable CORS
// Allow requests from http://localhost:3001 (React app)
const whitelist = ['http://localhost:3001']; // Add other allowed origins if needed
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable cookies or authentication headers
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Fetch articles from WordPress sites
async function fetchArticlesFromWordPress(siteUrl) {
  try {
    console.log(`Fetching articles from ${siteUrl}/wp-json/wp/v2/posts`);
    const response = await axios.get(`${siteUrl}/wp-json/wp/v2/posts?_embed`);
    console.log(`Fetched ${response.data.length} articles from ${siteUrl}`);
    return response.data.map(article => ({
      id: article.id,
      title: article.title.rendered,
      excerpt: article.excerpt.rendered,
      link: article.link,
      date: article.date,
    }));
  } catch (error) {
    console.error(`Error fetching articles from ${siteUrl}:`, error.message);
    return [];
  }
}

// Endpoint to fetch and filter articles
app.get('/api/articles', async (req, res) => {
  const wordpressSites = [
    'https://zyrtare.net', // Root domain of the WordPress site
    'https://www.alsat.mk/',
    // Add more WordPress sites here if needed
  ];

  let allArticles = [];

  for (const site of wordpressSites) {
    const articles = await fetchArticlesFromWordPress(site);
    allArticles = allArticles.concat(articles);
  }

  // Filter out fake or illegal news
  const filteredArticles = allArticles.filter(article => !detectFakeNews(article.title));

  res.json(filteredArticles);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the News Aggregator API! Use /api/articles to fetch articles.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});