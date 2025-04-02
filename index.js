const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});