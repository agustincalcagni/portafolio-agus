export const links = [
  { name: "Inicio", url: "/" },
  { name: "acerca", url: "/about" },
  { name: "proyectos", url: "/projects" },
  { name: "contacto", url: "/contact" },
];

export const dateFormatter = ({
  rawDate,
  lang,
}: {
  rawDate: Date | string;
  lang: string;
}) => {
  const date = new Date(rawDate).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};
