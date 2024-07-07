const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out'), {
  extensions: ['html']
}));

// Redirect all non-file requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'out', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.use((req, res, next) => {
    console.log(`Received request for ${req.url}`);
    next();
});