export const links = [
  { name: "Inicio", url: "/" },
  { name: "contacto", url: "/contact" },
  { name: "acerca", url: "/about" },
  { name: "proyectos", url: "/projects" },
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
