import { LiaBezierCurveSolid } from "react-icons/lia";
import { BsCodeSlash } from "react-icons/bs";
import { RxPencil2 } from "react-icons/rx";

export const services = [
  {
    serviceName: "website design",
    ServiceIcon: LiaBezierCurveSolid,
    details:
      "I created digital products with unique ideas use HTML, CSS & JavaScript",
    projects: "36",
  },
  {
    serviceName: "Development",
    ServiceIcon: BsCodeSlash,
    details:
      "I build website go live with React, Node.js, Express.js & MongoDB",
    projects: "26",
  },
  {
    serviceName: "Wix Website",
    ServiceIcon: RxPencil2,
    details: "I build website go live with WIX website builder",
    projects: "36",
  },
  {
    serviceName: "Wordpress Website",
    ServiceIcon: RxPencil2,
    details: "I build website go live with Wordpress website builder",
    projects: "36",
  },
];

export const skills = [
  {
    image: "https://i.ibb.co/prjPffT/html.png",
    name: "html",
    animation: "fade-down-right",
  },
  {
    image: "https://i.ibb.co/yV22CFr/react.png",
    name: "react",
    animation: "fade-down",
  },
  {
    image: "https://i.ibb.co/KVf9wP3/nodejs-1.png",
    name: "node.js",
    animation: "fade-up",
  },
  {
    image: "https://i.ibb.co/Y0ysDvd/figma.png",
    name: "figma",
    animation: "fade-down-left",
  },
  {
    // image: "https://i.ibb.co/W0BSmnz/wix.png",
    image: "https://i.ibb.co/wQpSQRH/wordpress.png",
    name: "wix",
    animation: "fade-up-right",
  },
  {
    image: "https://i.ibb.co/tzHqhjM/wordpress.png",
    name: "wordpress",
    animation: "fade-up",
  },
  {
    image: "https://i.ibb.co/fQBfBZV/webflow.png",
    name: "webflow",
    animation: "fade-left",
  },
];

export const projects = [
  {
    _id: 1,
    thumbnail: "https://i.ibb.co/h1J4TvW/kiddie-corner.png",
    projectUrl: "https://kiddie-corner-client.firebaseapp.com/",
    websiteName: "Kiddie Corner",
    technologies: ["React", "Express.js", "MongoDB"],
    title: "Kiddie Corner - Toy Marketplace website",
    animation: "fade-down-right",
  },
  {
    _id: 2,
    thumbnail: "https://i.ibb.co/rpKCgn4/chef-recipe-hunter-short.png",
    projectUrl: "https://chef-recipe-hunter-b7a10.web.app/",
    websiteName: "Chef-Recipe Hunter",
    technologies: ["React", "Express.js"],
    title: "Chef Recipe - Popular Chef Recipe Website",
    animation: "fade-down-left",
  },
  {
    _id: 3,
    thumbnail: "https://i.ibb.co/Kh0Bwhh/aircnc-short.png",
    projectUrl: "https://aircnc-part-01.web.app/",
    websiteName: "Air CNC",
    technologies: ["React", "Express.js", "MongoDB"],
    title: "Air CNC - Online Booking Website",
    animation: "fade-up-right",
  },
  {
    _id: 5,
    thumbnail: "https://i.ibb.co/JKWshW3/dream-job-short.png",
    projectUrl: "https://dreamjob-a9.netlify.app/",
    websiteName: "Dream Job",
    technologies: ["React", "Express.js", "MongoDB"],
    title: "Dream Job - Online Job Website",
    animation: "fade-up-left",
  },
];
