const express = require('express');

const app = express();

app.get('/bulk', (req, res) => {
  res.send('Hello from Bulk Product Routes');
});

const port = 5001;

app.listen(port, () => `Server running on port ${port}`);
