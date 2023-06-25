const express = require('express');
const fun = require('./api');

const app = express();
const port = 3000; // You can change the port number as needed

app.get('/api/arkose', async (req, res) => {
  try {
    const token = await fun.getToken({
      pkey: '35536E1E-65B4-4D96-9D97-6ADB7EFF8147',
      surl: 'https://tcr9i.chat.openai.com',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
      },
      site: 'https://chat.openai.com',
    });

    // Send token as string
    res.send(token);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve token' });
  }
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
