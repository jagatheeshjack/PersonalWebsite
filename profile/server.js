const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;
const MESSAGES_FILE = path.join(__dirname, 'public', 'messages.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure messages.json exists
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, '[]');
}

app.post('/api/messages', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
  messages.push({
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  });
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
