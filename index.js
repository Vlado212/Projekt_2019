﻿const express = require('express')
const app = express()
// Use the environment variable or use a given port
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Games API'))
app.get('/api', (req, res) => res.send('API version 1.0.0'))
app.get('/api/game', (req, res) => res.send([{imeIgraca:"Vlado"}, {imeIgraca:"Hrvoje"},{imeIgraca:"Matko"}], { lokacija:'Maksimir'}, {id:'123'}));
app.get('/api/user', (req, res) => res.send([{ime:"Vlado", id:'67'}, 
											{ime:"Hrvoje", id:'14'},
											{ime:"Matko", id:'12'}]));
app.get('/api/player', (req, res) => res.send("za podatke o igračima dodaj '/imeIgrača' na kraj URL-a"));
app.get('/api/user/id', (req, res) => res.send([
{ id:'67', ime:'Vlado', brojIgara:'560', avgBodova:'17'},
{ id:'14', ime:'Hrvoje', brojIgara:'415', avgBodova:'21'},
{ id:'12', ime:'Matko', brojIgara:'3467', avgBodova:'33'}]));

app.get('/api/place', (req, res) => res.send({ ime:'webgame', adresa:'Svetice', radnoVrijeme: '8-16'}));

//POST /api



app.post('/api/game', (req, res) => res.send([{imeIgraca:"Pero"}, {imeIgraca:"Ivo"},{imeIgraca:"Kruno"}], { lokacija:'Dugave'}, {id:'125'}));
app.post('/api/user', (req, res) => res.send([{ime:"Toni", id:'65'}, {ime:"Dino", id:'17'},{ime:"Ronald", id:'90'}]));
app.post('/api/player/Ray', (req, res) => res.send([{ime:"Ray", brojIgara:'560', avgBodova:'17'}]));
app.post('/api/player/Charles', (req, res) => res.send([{ime:"Charles", brojIgara:'415', avgBodova:'21'}]));
app.post('/api/player/Louis', (req, res) => res.send([{ime:"Louis", brojIgara:'3467', avgBodova:'33'}]));
app.post('/api/place', (req, res) => res.send({ ime:'drugaigra', adresa:'Trnsko', radnoVrijeme: '8-16'}));

app.put('/api/game', (req, res) => res.send([{imeIgraca:"Pero"}, {imeIgraca:"Ivo"},{imeIgraca:"Kruno"}], { lokacija:'Dugave'}, {id:'125'}));
app.put('/api/user', (req, res) => res.send([{ime:"Toni", id:'65'}, {ime:"Dino", id:'17'},{ime:"Ronald", id:'90'}]));
app.put('/api/player/Ray', (req, res) => res.send([{ime:"Ray", brojIgara:'560', avgBodova:'17'}]));
app.put('/api/player/Charles', (req, res) => res.send([{ime:"Charles", brojIgara:'415', avgBodova:'21'}]));
app.put('/api/player/Louis', (req, res) => res.send([{ime:"Louis", brojIgara:'3467', avgBodova:'33'}]));
app.put('/api/place', (req, res) => res.send({ ime:'drugaigra', adresa:'Trnsko', radnoVrijeme: '8-16'}));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//app.listen(port, function () {
  // console.log('Express server listening on %d, in %s mode', port, app.get('env'));
// });

