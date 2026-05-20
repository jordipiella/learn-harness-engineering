# Electron Arquitectura Reglas

- Renderer código may not directly access the filesystem.
- Preload is the only bridge between renderer and Electron main.
- Retrieval and indexing logic live in service modules, not UI components.
- Logging should be estructurado and emitted from service límites.
