export const profile = {
  name: "Ismael Sánchez Gragera",
  shortName: "Ismael Sánchez",
  role: "Desarrollador Python especializado en backend, automatización, IA y datos",
  lead:
    "Desarrollo software en Python que resuelve problemas reales de empresa: automatización de procesos, backend y APIs, y proyectos de datos e inteligencia artificial. He puesto en producción un sistema RPA que trabaja 24/7 y hoy se vende a otras empresas del sector, y estudio Ingeniería en Inteligencia Artificial.",
  email: "isanchezg2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/ismael-sg",
  github: "https://github.com/Ismaelsg2003",
  cv: "/cv/CV_Ismael_Sanchez.pdf",
};

export const about = [
  "Soy desarrollador Python. Me gusta construir software completo y útil: aplicaciones web, APIs y servicios de backend, herramientas internas para empresas, automatizaciones y proyectos de datos e inteligencia artificial.",
  "Trabajo de punta a punta: entiendo el problema, diseño la solución, la programo con tests y la dejo funcionando en un servidor. Mi experiencia en sistemas (Linux, redes, despliegues) me permite encargarme también de esa última parte.",
  "Mi último proyecto profesional fue un sistema que trabaja 24/7 en producción y hoy se vende a otras empresas del sector. Ahora estudio Ingeniería en Inteligencia Artificial en UNIR, después de especializarme en IA y Big Data.",
];

export const facts = [
  { label: "Estudiando", value: "Ingeniería en Inteligencia Artificial (UNIR)" },
  { label: "Último puesto", value: "Programador Python en Grúas Eugenio" },
  { label: "Stack principal", value: "Python, FastAPI, Node.js, SQL y Docker" },
  { label: "Idiomas", value: "Español Nativo - Inglés B1" },
];

export const services = [
  {
    title: "Automatización de procesos",
    text: "Bots RPA, scraping y scripts que hacen solos el trabajo repetitivo: leer webs, rellenar formularios, mover datos entre sistemas y avisar cuando algo pasa.",
    tags: ["Playwright", "RPA", "Web scraping", "Twilio", "Telegram"],
  },
  {
    title: "Backend y APIs",
    text: "Servicios y APIs REST con su base de datos, reglas de negocio configurables y paneles de control para que el cliente lo gestione sin tocar código.",
    tags: ["Python", "FastAPI", "Node.js", "PostgreSQL", "MySQL"],
  },
  {
    title: "Datos e inteligencia artificial",
    text: "Recogida y tratamiento de datos, modelos de machine learning y NLP, y dashboards para tomar decisiones con números.",
    tags: ["Machine Learning", "NLP", "Spark", "Power BI"],
  },
  {
    title: "Sistemas y despliegue",
    text: "Llevar las aplicaciones a producción y mantenerlas en marcha: servidores Linux, Docker, VPS, HTTPS y monitorización.",
    tags: ["Linux", "Docker", "VPS", "Redes"],
  },
];

export const experience = [
  {
    role: "Programador Python (RPA y sistemas)",
    company: "Grúas Eugenio",
    sector: "Grúas y asistencia en carretera",
    period: "Ago 2025 – Nov 2025",
    points: [
      "Diseño y desarrollo de bots RPA que aceptan y asignan servicios de asistencia automáticamente las 24 horas, sin intervención del operador.",
      "Producto escalable que se revende a otras empresas de grúas, con una máquina virtual aislada por empresa.",
      "Reglas de negocio configurables desde base de datos, avisos telefónicos con Twilio y panel de control de logs y arranque.",
      "Integración con APIs, despliegue en VPS Linux y empaquetado como ejecutables para usuarios no técnicos.",
    ],
    stack: ["Python", "Twilio", "VPS Linux", "APIs REST", "SQL"],
  },
  {
    role: "Técnico de sistemas",
    company: "SIMEX Informática S.L.",
    sector: "",
    period: "Mar 2023 – Jun 2023",
    points: [
      "Soporte técnico a usuarios y mantenimiento de estaciones de trabajo.",
      "Automatización de tareas administrativas mediante scripts y monitorización básica de sistemas.",
    ],
    stack: [],
  },
];

export const education = [
  { title: "Grado en Ingeniería en Inteligencia Artificial", place: "UNIR, Universidad Internacional de La Rioja", period: "2026 – en curso", main: true },
  { title: "Curso de Especialización en Inteligencia Artificial y Big Data", place: "I.E.S. Albarregas. Machine Learning, NLP, Hadoop, Spark y Power BI", period: "2024 – 2025", main: true },
  { title: "CFGS Administración de Sistemas Informáticos en Red (ASIR)", place: "I.E.S. Albarregas", period: "2021 – 2023", main: false },
];

export const skills = [
  { group: "Lenguajes", items: ["Python", "JavaScript (Node.js)", "SQL", "Bash"] },
  { group: "Automatización y RPA", items: ["Bots RPA", "Playwright", "Web scraping", "APIs REST", "Twilio"] },
  { group: "IA y datos", items: ["Machine Learning", "NLP", "Hadoop", "Spark", "Power BI"] },
  { group: "Backend y bases de datos", items: ["FastAPI", "Node.js y Express", "PostgreSQL", "MySQL", "SQLite"] },
  { group: "Sistemas", items: ["Linux", "Docker", "VPS", "Redes", "Monitorización"] },
];
