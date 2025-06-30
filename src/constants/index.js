
const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
const counterItems = [
  { value: 8, suffix: "+", label: "CGPA Throughout" },
  { value: 9, suffix: "+", label: "Completed Projects" },
];

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "About Me",
    link: "#about-me",
  },
];

const abilities = [
  {
    imgPath: "/images/time.png",
    title: "Quick Learner",
    desc: "Adapt rapidly to new technologies and frameworks, turning unfamiliar tools into strengths in short time.",
  },
  {
    imgPath: "/images/solve.png",
    title: "Strong Problem-Solving Skills",
    desc: "Approach challenges with logical thinking and structured analysis, honed through consistent competitive programming.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Empathetic Communicator",
    desc: "Able to explain complex ideas clearly and support peers, making collaboration and mentorship more impactful.",
  },
  {
    imgPath: "/images/willpower.png",
    title: "Self-Motivated & Disciplined",
    desc: "Drive projects and learning independently with consistency, even without external pressure or deadlines.",
  },
  {
    imgPath: "/images/growth.png",
    title: "Growth Mindset",
    desc: "Continuously seek improvement, welcome feedback, and view challenges as opportunities to level up.",
  },
];

const expCards = [
  {
    review: "An exceptional coordinator and natural leader, Vidita seamlessly managed 50+ campus drives and weekly training sessions, showcasing stellar organizational and managerial skills that empowered 600+ students and elevated team success as a training and placement coordinator.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Ajay Kumar Garg Engineering College",
    date: "November 2022 - Present",
    responsibilities: [
      "Consistently maintained an 8+ CGPA while building a strong foundation in core Computer Science subjects such as Data Structures, Algorithms, DBMS, Operating Systems and Computer Networks.",
      "Balanced academics with active involvement in extracurricular activities, demonstrating strong time management, multitasking, and dedication to holistic development.",
    ],
  },
  {
    review: "As Head of the Technical Team, Vidita demonstrated outstanding managerial skills by leading cross-functional teams, delivering complex technical projects on time and within budget, and effectively communicating progress to the school board.",
    imgPath: "/images/exp2.jpeg",
    logoPath: "/images/logo2.jpeg",
    title: "Gurukul the School",
    date: "April 2020 - June 2022",
    responsibilities: [
      "Maintained an excellent scholarly record throughout high school while actively participating in multiple clubs, including Interact Rotary Club, Tech Club, and the Organising Committee.",
      "Demonstrated strong leadership and teamwork by balancing academics with active involvement in club initiatives, events, and social impact activities, reflecting commitment to both personal and community growth.",
    ],
  }
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export {
  words,
  counterItems,
  navLinks,
  abilities,
  expCards,
  techStackIcons
};