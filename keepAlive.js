const https = require('https');

const SERVER_URL = "https://server-ei7t.onrender.com/api/donations";

const keepAlive = () => {
  https.get(SERVER_URL, (res) => {
    console.log('Ping successful with status code:', res.statusCode);
  }).on('error', (e) => {
    console.error('Ping failed with error:', e);
  });
};

// Ping every 5 minutes (300000 ms)
setInterval(keepAlive, 300000);

keepAlive(); // Initial ping
