// /routes/auth.js
const path = require('path');
const express = require('express');
const router = express.Router();

// Usuarios "hardcodeados" (ficticios)
const USUARIOS = {
  admin: 'admin123',
  auditor: 'segura2025'
};

// GET /login -> muestra el formulario (tu login.html)
router.get('/login', (req, res) => {
  // si ya está logueado, manda al dashboard
  if (req.session?.usuario) return res.redirect('/dashboard');
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

// POST /login -> valida credenciales
router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (USUARIOS[username] && USUARIOS[username] === password) {
    req.session.usuario = { username };
    return res.redirect('/dashboard');
  }
  // si falla, vuelve a login con un query param de error simple
  return res.redirect('/login?error=1');
});

// GET /logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    return res.redirect('/login');
  });
});

module.exports = router;
