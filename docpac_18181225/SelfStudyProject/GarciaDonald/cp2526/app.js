const { error } = require('console')
const express = require('express')
const { json } = require('stream/consumers')
const path = require('path')
const fs = require('fs')
const { name } = require('ejs')

const app = express()

const port = 3000
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'img')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render ('index');
})

app.get('/aboutus', (req, res) => {
    res.render ('aboutus');
});
app.get('/projinfo', (req, res) => {
    res.render ('projinfo');
});

app.listen(3000, () => {
    console.log('Server is running on http://172.16.3.217:3000')
});