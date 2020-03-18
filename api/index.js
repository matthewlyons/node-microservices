const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from API Route');
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
