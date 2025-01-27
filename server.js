const express = require('express');
const app = express();
const compression = require('compression');

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/desafio-brewery-linx'));

app.use(compression());

app.get('/*', (req, res) => {
    res.setHeader('Content-Enconding', 'gzip');
    res.setHeader('Accept-Enconding', 'gzip');
    res.sendFile(__dirname + 'dist/desafio-brewery-linx/index.html');
})

app.listen(PORT, () => {
    console.log('server started on port 8080');
})