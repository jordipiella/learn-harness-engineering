# Calibración de prompts

Las instrucciones raíz deben definir el marco operativo, no cada movimiento posible.

## Mantener en el archivo raíz

- propósito y scope del repositorio
- ruta de arranque
- ruta de verificación
- restricciones no negociables
- artefactos de estado requeridos
- reglas de fin de sesión

## Mover fuera del archivo raíz

- casos límite históricos largos
- detalles de implementación específicos de un tema
- notas de arquitectura local que pertenecen cerca del código
- ejemplos que solo aplican a un subsistema

## Regla de trabajo

El archivo raíz debe ayudar a una sesión fresca a orientarse rápido. Si se convierte en un vertedero para cada fallo pasado, divide el detalle en documentos más pequeños y enlázalos desde ahí.
