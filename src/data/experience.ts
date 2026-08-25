export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  project?: string;
  technologies: string[];
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Ssr Software Engineer",
    period: "Febrero 2022 - Presente",
    location: "Buenos Aires, Argentina",
    technologies: ["React.js", "TypeScript", "Microfrontends", "Webpack", "Module Federation", "AEM"],
    highlights: [
      "Desarrollo de aplicaciones bancarias y sitios digitales para Galicia.",
      "Gestión de despliegues en distintos ambientes, pruebas, validaciones y promoción a producción.",
      "Desarrollo y mantenimiento de productos digitales bancarios para BBVA.",
    ],
  },
  {
    company: "Agropro",
    role: "Software Developer",
    period: "Octubre 2021 - Enero 2022",
    location: "Buenos Aires, Argentina",
    technologies: ["React.js", "Agile/Scrum"],
    highlights: [
      "Desarrollo y mejora de funcionalidades para una plataforma AgTech.",
      "Creación de componentes reutilizables y contribución a la evolución continua del producto.",
      "Mantenimiento de funcionalidades existentes y resolución de incidencias.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    period: "Marzo 2021 - Octubre 2021",
    location: "Buenos Aires, Argentina",
    project: "ERP web para Saufer Soluciones",
    technologies: ["React.js"],
    highlights: [
      "Desarrollo de interfaces, componentes reutilizables y funcionalidades orientadas a procesos internos.",
    ],
  },
];

export const featuredExperiences = [
  {
    client: "Galicia",
    label: "Producto bancario en producción",
    technologies: ["React.js", "TypeScript", "Microfrontends", "Webpack", "Module Federation", "AEM"],
    points: [
      "Aplicaciones bancarias con React.js, TypeScript y arquitectura Micro-Frontend.",
      "Home page y otros sitios digitales del banco, con integración a Adobe Experience Manager (AEM).",
      "Despliegues entre ambientes, pruebas, validaciones, promoción a producción y resolución de incidencias.",
    ],
  },
  {
    client: "BBVA",
    label: "Producto bancario en producción",
    technologies: ["LitElement", "Polymer"],
    points: [
      "Desarrollo y mantenimiento de productos digitales con nuevas funcionalidades y componentes reutilizables.",
      "Mantenimiento evolutivo y resolución de incidencias en aplicaciones bancarias en producción.",
    ],
  },
] as const;
