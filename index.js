const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
})

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/peliculas', (req, res) => {
  
    fetch("https://40.89.131.140/peliculas/api_pelis",{ agent })
        .then(res => { return res.json()})
        .then(data => {
          console.log(data)
          res.json(data)
        }).catch(error => {
          console.log(error)
        })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Aplicación películas escuchando en ${port}`);

