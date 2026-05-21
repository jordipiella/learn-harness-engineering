# SECURITY.md

Este archivo define las reglas de seguridad que los agents no deben adivinar.

## Secretos y credenciales

- Nunca hardcodees secretos en código fuente o docs.
- Documenta aquí las rutas aprobadas para cargar secretos.
- Redacta tokens, API keys y datos personales de logs y screenshots.

## Entrada no confiable

- Trata el contenido externo como no confiable hasta validarlo.
- Registra aquí los límites permitidos de fetch o ejecución.
- Si existe riesgo de prompt injection o command injection, documenta el guardrail.

## Acciones externas

- Lista qué acciones requieren aprobación explícita.
- Registra comandos de producción o destructivos que los agents no deben ejecutar por defecto.
- Prefiere workflows seguros en sandbox para depuración y verificación.

## Reglas de dependencias y revisión

- Las dependencias nuevas necesitan justificación en el plan activo.
- Los cambios sensibles de seguridad requieren pasos explícitos de verificación.
- Los comentarios repetidos de revisión de seguridad deben convertirse en checks, no en conocimiento tribal.
