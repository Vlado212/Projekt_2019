const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Games API'))
app.get('/api', (req, res) => res.send('API version 1.0.0'))
app.get('/api/game', (req, res) => res.send([{imeIgraca:"Vlado"}, {imeIgraca:"Hrvoje"},{imeIgraca:"Matko"}], { lokacija:'Maksimir'}, {id:'123'}));
app.get('/api/user', (req, res) => res.send([{ime:"Vlado", id:'67'}, {ime:"Hrvoje", id:'14'},{ime:"Matko", id:'12'}]));
app.get('/api/player', (req, res) => res.send("za podatke o igračima dodaj '/imeIgrača' na kraj URL-a"));
app.get('/api/player/Vlado', (req, res) => res.send([{ime:"Vlado", brojIgara:'560', avgBodova:'17'}]));
app.get('/api/player/Hrvoje', (req, res) => res.send([{ime:"Hrvoje", brojIgara:'415', avgBodova:'21'}]));
app.get('/api/player/Matko', (req, res) => res.send([{ime:"Matko", brojIgara:'3467', avgBodova:'33'}]));

app.get('/api/place', (req, res) => res.send({ ime:'webgame', adresa:'Svetice', radnoVrijeme: '8-16'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
