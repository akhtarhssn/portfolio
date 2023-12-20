import { LiaBezierCurveSolid } from "react-icons/lia";
import { BsCodeSlash } from "react-icons/bs";
import { RxPencil2 } from "react-icons/rx";
import airCnc from "../src/assets/images/projects/Air-CNC.png";
import recipe from "../src/assets/images/projects/Chef-Recipe.png";
import dreamJob from "../src/assets/images/projects/Dream-Job.png";
import food from "../src/assets/images/projects/Food-Lover.png";
import personal from "../src/assets/images/projects/Personal-Portfolio.png";
import toys from "../src/assets/images/projects/Toy-Stars.png";
import portfolio from "../src/assets/images/projects/Wixden-Portfolio.png";
// import second from "../src/assets/images/projects";

const services = [
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

const skills = [
  {
    image: "https://i.ibb.co/prjPffT/html.png",
    name: "html",
    animation: "fade-down-right",
  },
  {
    image: "https://i.ibb.co/HCFxbgB/css-logo.png",
    name: "CSS",
    animation: "fade-down",
  },
  {
    image: "https://i.ibb.co/7yrg4dt/js-logo.png",
    name: "JavaScript",
    animation: "fade-down-left",
  },
  {
    image: "https://i.ibb.co/RS6g0ng/tailwind.png",
    name: "tailwind",
    animation: "fade-down-right",
  },
  {
    image: "https://i.ibb.co/qj7V4ps/bootstrap.png",
    name: "bootstrap",
    animation: "fade-up-right",
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
    image: "https://i.ibb.co/Z698KVL/express.png",
    name: "express",
    animation: "fade-left",
  },
  {
    image: "https://i.ibb.co/q0JHnqr/firebase.png",
    name: "firebase",
    animation: "fade-up",
  },
  {
    image: "https://i.ibb.co/hV4wCgd/figma.png",
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

const projects = [
  {
    _id: 1,
    thumbnail: toys,
    projectUrl: "https://kiddie-corner-client.firebaseapp.com/",
    websiteName: "Kiddie Corner",
    technologies: ["React", "Express.js", "MongoDB"],
    title: "Kiddie Corner || Toy Marketplace website",
    animation: "fade-down-right",
  },
  {
    _id: 2,
    thumbnail: recipe,
    projectUrl: "https://chef-recipe-hunter-b7a10.web.app/",
    websiteName: "Chef-Recipe Hunter",
    technologies: ["React", "Express.js"],
    title: "Chef Recipe || Popular Chef Recipe Website",
    animation: "fade-down-left",
  },
  {
    _id: 3,
    thumbnail: portfolio,
    projectUrl: "https://wixdenportfolio.vercel.app",
    websiteName: "Wixden Portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    title: "Wixden || Personal Portfolio Website",
    animation: "fade-down-right",
  },
  {
    _id: 4,
    thumbnail: food,
    projectUrl: "https://foodlover.vercel.app",
    websiteName: "Food Lover",
    technologies: ["HTML", "CSS", "JavaScript"],
    title: "Food Lover || Restaurant Landing Page",
    animation: "fade-up-left",
  },
  {
    _id: 5,
    thumbnail: personal,
    projectUrl: "https://myportfolio5.vercel.app/",
    websiteName: "My Portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    title: "My Portfolio || Responsive Portfolio Website",
    animation: "fade-down-left",
  },
  {
    _id: 6,
    thumbnail: airCnc,
    projectUrl: "https://aircnc-part-01.web.app/",
    websiteName: "Air CNC",
    technologies: ["React", "Express.js", "MongoDB"],
    title: "Air CNC || Online Booking Website",
    animation: "fade-up-right",
  },
  {
    _id: 7,
    thumbnail: dreamJob,
    projectUrl: "https://dreamjob-a9.netlify.app/",
    websiteName: "Dream Job",
    technologies: ["React", "Express.js", "MongoDB"],
    title: "Dream Job || Online Job Website",
    animation: "fade-up-left",
  },
];

export const data = {
  services,
  skills,
  projects,
};
