// server.js
const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// sesiones (requerido para login ficticio)
app.use(session({
  secret: 'clave_super_secreta',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const authRoutes = require('./routes/auth');
const riesgosRoutes = require('./routes/riesgos');
app.use(authRoutes);
app.use('/riesgos', riesgosRoutes);

// Página raíz: redirige a dashboard si autenticado o a login si no
app.get('/', (req, res) => {
  if (req.session?.usuario) {
    return res.redirect('/dashboard');
  }
  return res.redirect('/login');
});

// Vista simple del dashboard (protegida, vía middleware en la ruta)
app.get('/dashboard', (req, res) => {
  if (!req.session?.usuario) return res.redirect('/login');
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
