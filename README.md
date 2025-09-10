# Informe de Auditoría de Sistemas - Examen de la Unidad I

**Nombres y apellidos:**  
**Fecha:**  
**URL GitHub:** https://github.com/tuusuario/auditoria-examen

## 1. Proyecto de Auditoría de Riesgos

### Login
**Evidencia:** ![Login](./imgs/login_ok.png)  
**Descripción:** Se implementó un login ficticio sin BD (usuarios en memoria) con `express-session`.  
Protección por middleware para restringir acceso a `/dashboard`.

### Motor de Inteligencia Artificial
**Evidencia:** ![Código IA](./imgs/ia_engine.png)  
**Descripción:** Motor IA local basado en plantillas por activo que genera perfil, impacto, recomendaciones 
(alineadas a ISO 27001) y nivel de riesgo. Resultado visible por POST `/riesgos/analizar`.

## 2. Hallazgos

### Activo 1: Servidor de base de datos
**Evidencia:** ![A1](./imgs/a1_db.png)  
**Condición:** Posible falta de cifrado en reposo y controles granulares.  
**Recomendación:** Cifrado en reposo, RBAC, auditoría de logs, backups cifrados.  
**Riesgo:** Alto

### Activo 2: API Transacciones
**Evidencia:** ![A2](./imgs/a2_api.png)  
**Condición:** Autenticación insuficiente y sin rate limiting.  
**Recomendación:** OAuth2/JWT, rate limiting, validación estricta, monitoreo.  
**Riesgo:** Alto

### Activo 3: Aplicación Web de Banca
**Evidencia:** ![A3](./imgs/a3_web.png)  
**Condición:** No se fuerza HSTS/HTTPS, pruebas de seguridad insuficientes.  
**Recomendación:** HSTS/TLS1.2+, CSP, cookies seguras, pentesting.  
**Riesgo:** Alto

### Activo 4: Servidor de Correo
**Evidencia:** ![A4](./imgs/a4_mail.png)  
**Condición:** Parcheo atrasado, SPF/DKIM/DMARC incompletos.  
**Recomendación:** Parches, SPF/DKIM/DMARC, MFA admins, monitoreo.  
**Riesgo:** Medio

### Activo 5: Firewall Perimetral
**Evidencia:** ![A5](./imgs/a5_fw.png)  
**Condición:** Reglas permisivas y puertos innecesarios abiertos.  
**Recomendación:** Mínimo privilegio, cerrar puertos, hardening, alertas de cambios.  
**Riesgo:** Medio

## Anexo 1: Activos de información
(Agrega la lista del Anexo 1 del enunciado para referencia)
