import { HomeClient, type Section } from "@/components/HomeClient";

const sections: Section[] = [
  {
    id: "top",
    title: "EL ESCAPARATE",
    bg: "/logo.png",
    fit: "contain",
  },
  { id: "series", title: "SERIES", subtitle: "Críticas, estrenos y recomendaciones.", bg: "/sections/series.jpg" },
  { id: "cine", title: "CINE", subtitle: "Festivales, alfombras rojas y entrevistas.", bg: "/sections/cine.jpg" },
  { id: "musica", title: "MÚSICA", subtitle: "Directos, backstage y cultura.", bg: "/sections/musica.jpg" },
  { id: "deportes", title: "DEPORTES", subtitle: "Coberturas, análisis y eventos.", bg: "/sections/deportes.jpg" },
  { id: "nosotros", title: "NOSOTROS", subtitle: "Quiénes somos y qué hacemos.", bg: "/sections/nosotros.jpg" },
  { id: "moda", title: "MODA", subtitle: "Looks, tendencias y escena.", bg: "/sections/moda.jpg" },
  { id: "entrevistas", title: "ENTREVISTAS", subtitle: "Conversaciones cortas y directas.", bg: "/sections/entrevistas.jpg" },
];

export default function Page() {
  return <HomeClient sections={sections} />;
}
