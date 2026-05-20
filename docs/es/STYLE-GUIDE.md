# Guía de estilo para la localización española

## Voz

- Usar español neutro, profesional y directo.
- Hablar al lector en segunda persona cuando el original lo haga.
- Mantener el tono práctico del curso: explicar qué hacer, por qué importa y cómo verificarlo.

## Terminología

- Seguir `docs/es/GLOSSARY.md`.
- Mantener `harness`, `agent`, `runtime`, `scope` en la forma definida por el glosario.
- No alternar entre sinónimos para conceptos centrales. Por ejemplo, usar `verificación` de forma consistente.

## Artefactos técnicos

No traducir:

- comandos de shell
- nombres de archivo y directorio
- claves JSON o de configuración
- nombres de paquetes
- identificadores de código
- URLs
- nombres de ramas, scripts o workflows

Traducir únicamente el texto explicativo que los rodea.

## Enlaces

- Si existe una página equivalente en español, enlazar a `/es/` o a la ruta relativa española.
- Si no existe equivalente español, mantener un enlace válido al recurso original.
- No traducir slugs de carpetas existentes, porque forman parte de rutas funcionales.

## Plantillas

Las plantillas en `docs/es/resources/templates/` deben seguir siendo copiables en menos de cinco minutos. Puede traducirse la explicación, pero los bloques que el usuario copiará a un repositorio real deben conservar nombres, campos y comandos funcionales.
