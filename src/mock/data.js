import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, my name is",
  name: "Stefan Giba",
  subtitle: "I'm an aspiring Software Developer.",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "Hello everyone! My name is Stefan, I am currently a student in Bucharest, at the Faculty of Automatic Control and Computer Science. I am looking forward to developing a carreer in Software Engineering and contribute to the improvement of the world we live in.",
  paragraphTwo:
    "Coding is my passion and I especially enjoy building web and mobile applications. Also, I am very fond of Machine Learning and Artificial Intelligence and I am always looking for a way to implement them in myproducts.I hope to continuously improve as a developer and for that I am willing to put in the hard work.",
  paragraphThree:
    "The programming languages I use are Javascript and Python, but I have also used Java and C++. My favourite technologies are ReactJS, NodeJS, Django and Django REST FRAMEWORK.",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "face-detection.png",
    title: "Face Detection",
    info:
      "ReactJS application that takes in the URL of an image containing a person, detects the person's face and frames it into a box.",
    info2: "It has built in sign in and register functions.",
    url: "https://face-recognition-io.herokuapp.com",
    repo: "https://github.com/stefangiba/face-recognition-frontend", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "robofriends.png",
    title: "Robofriends",
    info:
      "Simple ReactJS app that allows users to search through a collection of Robots by their names.",
    info2: "Uses Redux for state management.",
    url: "https://stefangiba.github.io/robofriends/",
    repo: "https://github.com/stefangiba/robofriends", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "music-generator.jpg",
    title: "Music Generator",
    info:
      "A Deep Learning application that takes ABC- notation piano songs as input and learns to generate original music.",
    info2: "Can be used to obtain royalty free music.",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "stefang867@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/stefan-giba/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/stefangiba",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
