const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/projects', (req, res) => {
    fs.readFile('projects.json', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Unable to fetch projects' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
