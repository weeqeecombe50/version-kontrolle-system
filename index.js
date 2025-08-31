const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Version Control System! We hope you enjoy your time here! If you have any questions, feel free to ask.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});