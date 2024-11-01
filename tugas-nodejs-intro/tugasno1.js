const fs = require('fs');

// Baca file teks bernama '1.txt'
fs.readFile('1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Gagal membaca file:', err);
    return;
  }
  console.log('Isi file:', data);
});
