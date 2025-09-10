// /routes/riesgos.js
const path = require('path');
const express = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const { analizarRiesgo } = require('../ia/engine');

const router = express.Router();

// POST /riesgos/analizar
router.post('/analizar', ensureAuth, (req, res) => {
  const { activo } = req.body || {};
  const resultado = analizarRiesgo(activo);

  // Render simple: devolvemos HTML básico como evidencia visible
  const html = `
    <html><head><meta charset="utf-8"><title>Resultado IA</title>
    <style>body{font-family:Arial;margin:24px;}pre{background:#f7f7f7;padding:12px;border-radius:6px}</style>
    </head><body>
      <a href="/dashboard">&larr; Volver</a>
      <h2>Resultado IA - ${resultado.activo}</h2>
      <pre>${JSON.stringify(resultado, null, 2)}</pre>
    </body></html>`;
  res.send(html);
});

module.exports = router;

 