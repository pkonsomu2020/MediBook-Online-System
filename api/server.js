const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5800;
require('dotenv').config();

// MySQL connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public'))); 

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { firstName, lastName, gender, email, phone, applicationDate, bloodGroup, concerns } = req.body;
    const query = 'INSERT INTO contacts (firstName, lastName, gender, email, phone, applicationDate, bloodGroup, concerns) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, gender, email, phone, applicationDate, bloodGroup, concerns], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving form data');
            return;
        }
        res.send('Your details have been saved!');
    });
});

// Handle message form submission
app.post('/submitMessage', (req, res) => {
    console.log('Request body:', req.body); // Log the incoming request body

    const { firstName, lastName, email, phone, message } = req.body;
    
    // Check for missing required fields
    if (!firstName || !lastName || !email || !phone || !message) {
        return res.status(400).send('All fields are required');
    }

    const query = 'INSERT INTO contact_form (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, phone, message], (err, result) => {
        if (err) {
            console.error('Database query error:', err); // More detailed error log
            return res.status(500).send('Error saving message data');
        }
        console.log('Message data saved:', result);
        res.send('Your message has been saved!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});