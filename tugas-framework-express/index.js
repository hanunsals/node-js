const express = require('express');
const app = express();
const PORT = 3000;

// Route untuk /hello
app.get('/hello', (req, res) => {
  res.json({
    message: "Success fetch message",
    data: "Hello World!"
  });
});

// Route untuk /user
app.get('/user', (req, res) => {
  res.json({
    message: "Success fetch user",
    data: {
      id: 1,
      name: "Budi",
      username: "budidu",
      email: "budidu@mail.com"
    }
  });
});

app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
