const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Data dummy video SD
const videos = [
  { id: 1, judul: 'Belajar Angka 1-10', kelas: 1, mapel: 'Matematika' },
  { id: 2, judul: 'Mengenal Huruf A-Z', kelas: 1, mapel: 'Bahasa Indonesia' },
  { id: 3, judul: 'Mengenal Warna', kelas: 1, mapel: 'Seni Budaya' },
];

// Endpoint untuk mengambil daftar video
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

// Endpoint root
app.get('/', (req, res) => {
  res.send('Server platform video SD berjalan!');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});