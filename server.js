require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport)
const PORT = process.env.PORT || 8000;

// api
const users = require('./api/users')
const request = require('./api/request')
// const tabs = require('./api/tabs')

// Middleware
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to backend'})
});

app.use('/api/users', users)
// app.use('/api/tabs', tabs)
app.use('/api/request', request)

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
})