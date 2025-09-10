// /ia/engine.js
// Motor IA determinístico: genera texto en base a plantillas por activo.
// Cumple con: perfil de riesgo, impacto y recomendaciones alineadas a ISO 27001.

const catalogo = {
  'Servidor de base de datos': {
    perfil: 'Almacena datos críticos de clientes y transacciones.',
    condicion: 'Posible falta de cifrado en reposo y controles de acceso granulares.',
    impacto: 'Alto: exposición de datos sensibles, sanciones regulatorias y pérdida de confianza.',
    recomendaciones: [
      'Aplicar cifrado en reposo y en tránsito (TLS).',
      'Implementar control de acceso basado en roles (RBAC).',
      'Auditar logs de acceso y anomalías.',
      'Backups cifrados y pruebas de restauración.'
    ]
  },
  'API Transacciones': {
    perfil: 'Expone operaciones financieras a sistemas internos/externos.',
    condicion: 'Autenticación insuficiente y rate limiting ausente.',
    impacto: 'Alto: fraude, abuso de endpoints y fuga de datos.',
    recomendaciones: [
      'Usar OAuth2/JWT robusto.',
      'Implementar rate limiting y detección de abuso.',
      'Validación estricta de entradas (OWASP).',
      'Registro y monitoreo continuo de eventos.'
    ]
  },
  'Aplicación Web de Banca': {
    perfil: 'Portal de clientes para operaciones y consultas.',
    condicion: 'HSTS/HTTPS estricto no forzado; pruebas de seguridad insuficientes.',
    impacto: 'Alto: robo de credenciales y session hijacking.',
    recomendaciones: [
      'Forzar HTTPS/TLS1.2+ y HSTS.',
      'CSP y cookies seguras (HttpOnly/SameSite).',
      'Pentesting regular y SAST/DAST.',
      'Gestión segura de sesiones.'
    ]
  },
  'Servidor de Correo': {
    perfil: 'Mensajería corporativa crítica.',
    condicion: 'Parcheo atrasado y SPF/DKIM/DMARC incompletos.',
    impacto: 'Medio-Alto: phishing, spoofing y compromiso de cuentas.',
    recomendaciones: [
      'Aplicar parches y endurecer configuración.',
      'Configurar SPF, DKIM y DMARC.',
      'MFA para cuentas administrativas.',
      'Monitoreo de intentos fallidos.'
    ]
  },
  'Firewall Perimetral': {
    perfil: 'Controla tráfico de borde entre redes.',
    condicion: 'Reglas permisivas y puertos innecesarios abiertos.',
    impacto: 'Medio-Alto: superficie de ataque ampliada.',
    recomendaciones: [
      'Principio de mínimo privilegio en reglas.',
      'Cerrar puertos no utilizados.',
      'Revisión periódica y hardening.',
      'Alertas ante cambios de configuración.'
    ]
  }
};

// nivel de riesgo sugerido en función del activo
function puntuarRiesgo(activo) {
  if (['Servidor de base de datos', 'API Transacciones', 'Aplicación Web de Banca'].includes(activo)) return 'Alto';
  if (['Servidor de Correo', 'Firewall Perimetral'].includes(activo)) return 'Medio';
  return 'Medio';
}

function analizarRiesgo(activo) {
  const base = catalogo[activo] || {
    perfil: 'Activo no catalogado, requerirá análisis puntual.',
    condicion: 'No se identificó patrón, evaluar controles aplicables.',
    impacto: 'Medio',
    recomendaciones: ['Aplicar controles ISO 27001 según criticidad y exposición.']
  };

  return {
    activo,
    perfil: base.perfil,
    condicion: base.condicion,
    impacto: base.impacto,
    recomendaciones: base.recomendaciones,
    riesgo: puntuarRiesgo(activo)
  };
}

module.exports = { analizarRiesgo };
