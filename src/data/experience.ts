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
    role: "Software Engineer",
    period: "Febrero 2022 - Presente",
    location: "Buenos Aires, Argentina",
    technologies: ["React.js", "TypeScript", "Microfrontends", "Webpack", "Module Federation", "AEM"],
    highlights: [
      "Desarrollo y evolución de aplicaciones bancarias productivas utilizando React.js, TypeScript y arquitectura Micro-Frontend.",
      "Participación en el ciclo completo de entrega: desarrollo, integración, validación, despliegue y resolución de incidencias.",
      "Implementación y mantenimiento de aplicaciones frontend integradas mediante Webpack Module Federation, junto con la evolución de productos bancarios en producción.",
    ],
  },
  {
    company: "Agropro",
    role: "Software Developer",
    period: "Octubre 2021 - Enero 2022",
    location: "Buenos Aires, Argentina",
    technologies: ["React.js", "Agile/Scrum"],
    highlights: [
      "Desarrollo y evolución de funcionalidades para una plataforma AgTech.",
      "Creación de componentes reutilizables para acompañar la evolución continua del producto.",
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
      "Desarrollo de interfaces, componentes reutilizables y funcionalidades para procesos internos de un ERP web.",
    ],
  },
];

export const featuredExperiences = [
  {
    client: "Galicia",
    label: "Productos bancarios en producción",
    technologies: ["React.js", "TypeScript", "Microfrontends", "Webpack", "Module Federation", "AEM"],
    points: [
      "Proyecto actual — Arquitectura Micro-Frontend: desarrollo y evolución de aplicaciones bancarias productivas utilizando React.js, TypeScript y Webpack Module Federation.",
      "Proyecto anterior — Web bancaria y sitios digitales: participación en la home page y otros sitios digitales del banco con React.js y Adobe Experience Manager (AEM).",
      "Integración entre aplicaciones, despliegues entre ambientes, pruebas, validaciones, promoción a producción y resolución de incidencias.",
    ],
  },
  {
    client: "BBVA",
    label: "Evolución de producto bancario",
    technologies: ["LitElement", "Polymer"],
    points: [
      "Desarrollo y evolución de aplicaciones digitales bancarias, incorporando nuevas funcionalidades y componentes reutilizables en productos en producción.",
      "Mantenimiento evolutivo y resolución de incidencias en aplicaciones bancarias en producción.",
    ],
  },
] as const;
