const express = require('express')
const app = express();
// FIGURE 2. 
app.get('/', (req, res) => {
    res.send('My New App!');
});

// FIGURE 3. Simulating a simple API
app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
})

// FIGURE 4. Express Route Parameters
app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
})

// FIGURE 5. Multi Params
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send(req.params);
})

// FIGURE 6. Query Parameters
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
})

app.listen(3000, () => console.log('Listening on port 3000'));
