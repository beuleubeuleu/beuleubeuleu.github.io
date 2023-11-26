import atikeHome   from "../assets/projets/atike/atike-home.png";
import educaHome   from "../assets/projets/educa/educa-home.png";
import nohasbaHome from "../assets/projets/nohasba/nohasba-home.png";

export const myArticles = [
  {
    titre: "Atikè",
    techStack: ["AstroJS", "AWS"],
    href: "/blog/atike/",
    img: atikeHome,
    description: "E-commerce",
    type: "Projet",
  },
  {
    titre: "Educa",
    techStack: ["AstroJS", "React", "MongoDB"],
    href: "/blog/educa/",
    img: educaHome,
    description: "Blog",
    type: "Projet",
  },
  {
    titre: "NoHasba",
    techStack: ["React", "MySQL"],
    href: "/blog/nohasba/",
    img: nohasbaHome,
    description: "Gestionnaire de dépenses",
    type: "Projet",
  }
]