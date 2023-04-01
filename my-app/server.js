const express = require('express');
const app = express();
const path = require('path');

// Sirve los archivos estáticos de la carpeta build
app.use(express.static(path.join(__dirname, 'build')));

// Ruta que sirve el archivo index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Ruta de ejemplo que devuelve un JSON
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el servidor' });
});

console.log(process.env.REACT_APP_API_KEY)
console.log(process.env.Ok)
// Inicia el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  