const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  { id: 1, title: "Superman" },
  { id: 2, title: "Thor" },
  { id: 3, title: "Iron Man" },
];
// GET all movies
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

// POST add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(5000, () => console.log("Listening on port 5000..."));