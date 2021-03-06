const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const profiles = require('./routes/api/profiles')

const app = express();


app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profiles', profiles);


const db = require('./config/keys').mongoURI;

mongoose 
  .connect(db)
  .then(()=> console.log('Mongo Connected'))
  .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server running in port ${port}`));