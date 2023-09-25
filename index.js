const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide num1 and num2 as query parameters.' });
  }

  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});