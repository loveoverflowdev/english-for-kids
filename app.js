const mysql = require('mysql2');
const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();

app.use(cors());

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'manhblue',
  database: 'english_learning'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Function to retrieve colors
  function getColors(callback) {
    connection.query('SELECT * FROM colors', (err, colors) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, colors);
    });
  }

  // Function to retrieve topics
  function getTopics(callback) {
    connection.query('SELECT * FROM topics', (err, topics) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, topics);
    });
  }

  // Function to retrieve words and translations
  function getWords(callback) {
    connection.query('SELECT * FROM words', (err, words) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, words);
    });
  }

  // Define endpoints
  app.get('/topics', (req, res) => {
    getTopics((err, topics) => {
      if (err) {
        console.error('Error retrieving topics:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(topics);
      }
    });
  });

  app.get('/words', (req, res) => {
    getWords((err, words) => {
      if (err) {
        console.error('Error retrieving words:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(words);
      }
    });
  });

  app.get('/colors', (req, res) => {
    getColors((err, colors) => {
      if (err) {
        console.error('Error retrieving colors:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(colors);
      }
    });
  });

  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
