export const siteConfig = {
  brand: {
    name: "Casa Pellegrini",
    shortName: "Casa Pellegrini",
    tagline: "Un legado de belleza, historia y piezas únicas de colección",
    mission:
      "Preservando la herencia cultural a través de la curaduría excepcional de antigüedades y objetos de arte",
    foundedYear: 1924,
    legalSubtitle: "Patrimonio & Arte",
  },
  metadata: {
    title: {
      default: "Casa Pellegrini",
      template: "%s | Casa Pellegrini",
    },
    description: "Un legado de belleza, historia y piezas únicas de colección",
    keywords: [
      "antigüedades",
      "arte",
      "galería",
      "curaduría",
      "muebles de época",
      "relojes",
      "Buenos Aires",
      "Recoleta",
    ],
    locale: "es_AR",
  },
  contact: {
    email: "info@casapellegrini.com",
    phone: "+54 11 4800 1234",
    whatsapp: {
      number: "5491112345678",
      defaultMessage: "Hola Casa Pellegrini, me gustaría realizar una consulta.",
    },
    address: {
      street: "Av. Alvear 1800",
      neighborhood: "Recoleta",
      city: "Buenos Aires",
      country: "Argentina",
      full: "Av. Alvear 1800, Recoleta, Buenos Aires, Argentina",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.473586820353!2d-58.3908290847699!3d-34.58823598046342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa8c32d4315%3A0x67114227914856f6!2sAv.%20Alvear%201800%2C%20C1129AAB%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus",
    },
    hours: {
      weekdays: "Lunes a Viernes: 10:00 — 19:00",
      saturday: "Sábados: 10:00 — 14:00",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
