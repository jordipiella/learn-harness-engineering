import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const filesToTranslate = [
  ["README.md", "README-ES.md"],
  ["skills/README.md", "skills/README-ES.md"],
  ...Array.from({ length: 6 }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return [`projects/project-${n}/README.md`, `projects/project-${n}/README-ES.md`];
  })
];

const exactPhrases = [
  ["Welcome to Learn Harness Engineering", "Bienvenido a Learn Harness Engineering"],
  ["Welcome to Projects", "Bienvenido a los proyectos"],
  ["Welcome to the Resource Library", "Bienvenido a la biblioteca de recursos"],
  ["Skills Overview", "Resumen de habilidades"],
  ["Get started", "Empezar"],
  ["What you will learn", "Qué aprenderás"],
  ["Next steps", "Siguientes pasos"],
  ["Further Reading", "Lecturas adicionales"],
  ["Exercises", "Ejercicios"],
  ["Key Takeaways", "Ideas clave"],
  ["Key Terminology", "Terminología clave"],
  ["Project Overview", "Resumen del proyecto"],
  ["How to Proceed", "Cómo avanzar"],
  ["Resource Library", "Biblioteca de recursos"],
  ["Ready-to-Use Resource Library", "Biblioteca de recursos lista para usar"],
  ["The Core Mechanism of a Harness", "El mecanismo central de un harness"],
  ["The Model Is Smart, The Harness Makes It Reliable", "El modelo es inteligente; el harness lo vuelve fiable"],
  ["What Harness Engineering Actually Means", "Qué significa realmente Harness Engineering"],
  ["Quick Start", "Inicio rápido"],
  ["Learning Path", "Ruta de aprendizaje"],
  ["Syllabus", "Temario"],
  ["Visual Preview", "Vista previa visual"],
  ["PDF Coursebooks", "Libros del curso en PDF"],
  ["Course Homepage", "Página principal del curso"],
  ["Immersive Lectures", "Lecciones inmersivas"],
  ["Capstone Project", "Proyecto final"],
  ["Strong Models Don't Mean Reliable Execution", "Modelos potentes no significan ejecución fiable"],
  ["Same Horse, Different Fates", "El mismo caballo, destinos distintos"],
  ["Where Agents Actually Get Stuck", "Dónde se atascan realmente los agents"],
  ["When Things Fail, Fix the Harness First", "Cuando algo falla, arregla primero el harness"],
  ["The Million-Line Experiment", "El experimento del millón de líneas"],
  ["A More Down-to-Earth Example", "Un ejemplo más cercano"],
  ["What a Harness Actually Is", "Qué es realmente un harness"],
  ["Why Capable Agents Still Fail", "Por qué los agents capaces siguen fallando"],
  ["Why the Repository Must Become the System of Record", "Por qué el repositorio debe convertirse en el sistema de registro"],
  ["Why One Giant Instruction File Fails", "Por qué falla un único archivo gigante de instrucciones"],
  ["Why Long-Running Tasks Lose Continuity", "Por qué las tareas largas pierden continuidad"],
  ["Why Initialization Needs Its Own Phase", "Por qué la inicialización necesita su propia fase"],
  ["Why Agents Overreach and Under-Finish", "Por qué los agents se exceden y no terminan"],
  ["Why Feature Lists Are Harness Primitives", "Por qué las listas de funcionalidades son primitivas del harness"],
  ["Why Agents Declare Victory Too Early", "Por qué los agents declaran victoria demasiado pronto"],
  ["Why End-to-End Testing Changes Results", "Por qué las pruebas end-to-end cambian los resultados"],
  ["Why Observability Belongs Inside the Harness", "Por qué la observabilidad pertenece al interior del harness"],
  ["Why Every Session Must Leave a Clean State", "Por qué cada sesión debe dejar un estado limpio"],
  ["Prompt-Only vs. Rules-First", "Solo prompt frente a reglas primero"],
  ["Agent-Readable Workspace", "Espacio de trabajo legible por agents"],
  ["Multi-Session Continuity", "Continuidad entre sesiones"],
  ["Runtime Feedback and Scope Control", "Feedback en runtime y control de alcance"],
  ["Self-Verification and Role Separation", "Autoverificación y separación de roles"],
  ["Complete Harness", "Harness completo"],
  ["Advanced Pack", "Paquete avanzado"],
  ["English Templates", "Plantillas en español"],
  ["English Reference", "Referencia en español"],
  ["Overview", "Resumen"],
  ["Templates", "Plantillas"],
  ["Reference", "Referencia"],
  ["Lectures", "Lecciones"],
  ["Projects", "Proyectos"],
  ["Library", "Biblioteca"],
  ["Skills", "Habilidades"],
  ["Try Harness", "Probar Harness"],
  ["Practice project", "Proyecto práctico"],
  ["Code examples", "Ejemplos de código"],
  ["Source", "Fuente"]
];

const wordPhrases = [
  ["AI coding agents", "agents de programación con IA"],
  ["AI coding agent", "agent de programación con IA"],
  ["coding agents", "agents de programación"],
  ["coding agent", "agent de programación"],
  ["long-running agents", "agents de larga duración"],
  ["long-running tasks", "tareas largas"],
  ["state management", "gestión de estado"],
  ["verification feedback", "feedback de verificación"],
  ["runtime feedback", "feedback en runtime"],
  ["control systems", "sistemas de control"],
  ["working environment", "entorno de trabajo"],
  ["system of record", "sistema de registro"],
  ["source of truth", "fuente de verdad"],
  ["copy-ready", "listo para copiar"],
  ["end-to-end", "end-to-end"],
  ["full-pipeline", "de pipeline completo"],
  ["Definition of Done", "Definición de Terminado"],
  ["diagnostic loop", "bucle diagnóstico"],
  ["feature list", "lista de funcionalidades"],
  ["feature lists", "listas de funcionalidades"],
  ["handoff", "traspaso"],
  ["scope", "alcance"],
  ["repository", "repositorio"],
  ["repositories", "repositorios"],
  ["verification", "verificación"],
  ["observability", "observabilidad"],
  ["observable", "observable"],
  ["initialization", "inicialización"],
  ["session", "sesión"],
  ["sessions", "sesiones"],
  ["agent", "agent"],
  ["agents", "agents"],
  ["harnesses", "harnesses"],
  ["harness", "harness"]
];

const wordMap = new Map(Object.entries({
  "course": "curso",
  "dedicated": "dedicado",
  "engineering": "ingeniería",
  "environment": "entorno",
  "environments": "entornos",
  "design": "diseño",
  "state": "estado",
  "management": "gestión",
  "control": "control",
  "systems": "sistemas",
  "teaches": "enseña",
  "reliable": "fiable",
  "reliably": "de forma fiable",
  "build": "construir",
  "building": "construyendo",
  "features": "funcionalidades",
  "bugs": "errores",
  "tasks": "tareas",
  "rules": "reglas",
  "boundaries": "límites",
  "theory": "teoría",
  "practice": "práctica",
  "hands-on": "práctico",
  "project": "proyecto",
  "projects": "proyectos",
  "lecture": "lección",
  "lectures": "lecciones",
  "resources": "recursos",
  "resource": "recurso",
  "library": "biblioteca",
  "templates": "plantillas",
  "template": "plantilla",
  "learn": "aprender",
  "learning": "aprendizaje",
  "path": "ruta",
  "start": "empezar",
  "started": "iniciado",
  "guide": "guía",
  "guides": "guías",
  "quick": "rápido",
  "advanced": "avanzado",
  "overview": "resumen",
  "reference": "referencia",
  "method": "método",
  "workflow": "flujo de trabajo",
  "workflows": "flujos de trabajo",
  "context": "contexto",
  "instructions": "instrucciones",
  "instruction": "instrucción",
  "explicit": "explícito",
  "implicit": "implícito",
  "failure": "fallo",
  "failures": "fallos",
  "fails": "falla",
  "failed": "falló",
  "succeeds": "tiene éxito",
  "success": "éxito",
  "successful": "correcto",
  "test": "prueba",
  "tests": "pruebas",
  "testing": "pruebas",
  "verify": "verificar",
  "clean": "limpio",
  "complete": "completo",
  "completion": "finalización",
  "finished": "terminado",
  "done": "terminado",
  "task": "tarea",
  "file": "archivo",
  "files": "archivos",
  "folder": "carpeta",
  "folders": "carpetas",
  "code": "código",
  "tools": "herramientas",
  "tool": "herramienta",
  "command": "comando",
  "commands": "comandos",
  "run": "ejecutar",
  "runs": "ejecuta",
  "running": "ejecutando",
  "create": "crear",
  "creates": "crea",
  "make": "hacer",
  "makes": "hace",
  "add": "añadir",
  "adds": "añade",
  "fix": "arreglar",
  "fixes": "arregla",
  "use": "usar",
  "using": "usando",
  "used": "usado",
  "provide": "proporcionar",
  "provides": "proporciona",
  "understand": "entender",
  "understanding": "comprensión",
  "different": "diferente",
  "same": "mismo",
  "strong": "potente",
  "capable": "capaz",
  "model": "modelo",
  "models": "modelos",
  "prompt": "prompt",
  "prompts": "prompts",
  "rules-first": "reglas primero",
  "problem": "problema",
  "problems": "problemas",
  "solution": "solución",
  "solutions": "soluciones",
  "starter": "inicial",
  "example": "ejemplo",
  "examples": "ejemplos",
  "real": "real",
  "production": "producción",
  "developer": "desarrollador",
  "developers": "desarrolladores",
  "team": "equipo",
  "teams": "equipos",
  "review": "revisión",
  "quality": "calidad",
  "architecture": "arquitectura",
  "data": "datos",
  "user": "usuario",
  "users": "usuarios",
  "goal": "objetivo",
  "goals": "objetivos",
  "plan": "plan",
  "planner": "planificador",
  "generator": "generador",
  "evaluator": "evaluador",
  "result": "resultado",
  "results": "resultados",
  "output": "salida",
  "input": "entrada",
  "step": "paso",
  "steps": "pasos",
  "layer": "capa",
  "layers": "capas",
  "process": "proceso",
  "pipeline": "pipeline",
  "logs": "logs",
  "log": "log",
  "debuggable": "depurable",
  "debug": "depurar",
  "feedback": "feedback",
  "read": "leer",
  "write": "escribir",
  "writes": "escribe",
  "reading": "lectura",
  "writing": "escritura",
  "change": "cambio",
  "changes": "cambios",
  "structure": "estructura",
  "structured": "estructurado",
  "unstructured": "no estructurado",
  "clear": "claro",
  "clarity": "claridad",
  "specific": "específico",
  "specificity": "especificidad",
  "vague": "vago",
  "missing": "faltante",
  "wrong": "incorrecto",
  "correct": "correcto",
  "actual": "real",
  "daily": "diario",
  "local": "local",
  "global": "global",
  "support": "soporte",
  "compare": "comparar",
  "comparison": "comparación",
  "list": "lista",
  "checklist": "checklist",
  "rubric": "rúbrica",
  "criteria": "criterios",
  "condition": "condición",
  "conditions": "condiciones",
  "section": "sección",
  "sections": "secciones",
  "page": "página",
  "pages": "páginas",
  "chapter": "capítulo",
  "chapters": "capítulos",
  "exercise": "ejercicio",
  "exercises": "ejercicios",
  "reading": "lectura",
  "next": "siguiente",
  "previous": "anterior"
}));

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function copyTree(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyTree(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  ensureDir(dest);
  fs.copyFileSync(src, dest);
}

function replaceAll(input, pairs) {
  let output = input;
  for (const [from, to] of pairs) {
    output = output.split(from).join(to);
  }
  return output;
}

function translateText(text) {
  let output = replaceAll(text, exactPhrases);
  output = replaceAll(output, wordPhrases);
  output = output.replace(/\b[A-Za-z][A-Za-z-]*\b/g, (word) => {
    if (/^[A-Z0-9_]+$/.test(word)) return word;
    const lower = word.toLowerCase();
    const translated = wordMap.get(lower);
    if (!translated) return word;
    if (/^[A-Z]/.test(word)) {
      return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    return translated;
  });
  output = output
    .replaceAll("[中文版本 →]", "[Versión en chino →]")
    .replaceAll("[English]", "[English]")
    .replaceAll("../../../zh/", "../../../zh/")
    .replaceAll("/en/", "/es/")
    .replaceAll("docs/en/", "docs/es/")
    .replaceAll("blob/main/docs/es/", "blob/main/docs/es/")
    .replaceAll("README-CN.md", "README-CN.md")
    .replaceAll("README-KO.md", "README-KO.md");
  return output;
}

function translateMarkdown(content) {
  const chunks = content.split(/(```[\s\S]*?```)/g);
  return chunks.map((chunk) => {
    if (chunk.startsWith("```")) return chunk;
    return translateText(chunk);
  }).join("");
}

function translateFile(srcRel, destRel) {
  const src = path.join(root, srcRel);
  const dest = path.join(root, destRel);
  ensureDir(dest);
  const content = fs.readFileSync(src, "utf8");
  fs.writeFileSync(dest, translateMarkdown(content));
}

function translateMarkdownTree(dirRel) {
  const dir = path.join(root, dirRel);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(root, full);
    if (entry.isDirectory()) {
      translateMarkdownTree(rel);
    } else if (entry.name.endsWith(".md")) {
      const destRel = rel.replace(/^docs\/en\//, "docs/es/");
      translateFile(rel, destRel);
    }
  }
}

copyTree(path.join(root, "docs/en"), path.join(root, "docs/es"));
translateMarkdownTree("docs/en");
for (const [src, dest] of filesToTranslate) {
  translateFile(src, dest);
}

const inventory = [];
for (const file of walk(path.join(root, "docs/en"))) {
  const rel = path.relative(root, file);
  inventory.push(`- ${rel} -> ${rel.replace(/^docs\/en\//, "docs/es/")}`);
}
for (const [src, dest] of filesToTranslate) {
  inventory.push(`- ${src} -> ${dest}`);
}
fs.writeFileSync(
  path.join(root, "specs/001-spanish-translation/spanish-source-inventory.md"),
  `# Spanish Source Inventory\n\n${inventory.sort().join("\n")}\n`
);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}
