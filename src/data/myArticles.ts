import aoc2023Home from "../assets/blog/aoc2023/aoc2023-home.png"
import atikeHome   from "../assets/blog/atike/atike-home.png";
import educaHome   from "../assets/blog/educa/educa-home.png";
import nohasbaHome from "../assets/blog/nohasba/nohasba-home.png";

export const myArticles = [
  {
    titre: "Advent of Code 2023",
    techStack: ["Java", "Golang", "Haskell"],
    href: "/blog/aoc2023/",
    img: aoc2023Home,
    description: "Paradigme de programmation",
    type: "Expérience",
  },
  {
    titre: "Atikè",
    techStack: ["AstroJS", "AWS"],
    href: "/blog/atike/",
    img: atikeHome,
    description: "E-commerce",
    type: "Projet",
  },
  {
    titre: "NoHasba",
    techStack: ["React", "MySQL"],
    href: "/blog/nohasba/",
    img: nohasbaHome,
    description: "Gestionnaire de dépenses",
    type: "Projet",
  },
  {
    titre: "Educa",
    techStack: ["AstroJS", "React", "MongoDB"],
    href: "/blog/educa/",
    img: educaHome,
    description: "Blog",
    type: "Projet",
  }
]