const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = 5002;

app.listen(port, () => `Server running on port ${port}`);
