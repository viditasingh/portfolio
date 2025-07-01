import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";


gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://react-blog-app-pi-mauve.vercel.app/" target="_blank">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </div>
              <div className="text-content">
                <h2>
                  Blogging made easy with a Powerful, User-Friendly App
                  called React Blog App
                </h2>
                <p className="text-white-50 md:text-xl">
                  A modern, production-ready blog application built with React, featuring authentication, rich text editing, and cloud storage capabilities.
                </p>
              </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            
            <a href="https://github.com/viditasingh/Todo-using-Redux" target="_blank">
            <div className="project" ref={libraryRef}>
              
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Todo List App using Redux</h2>
            </div>
            </a>
            
            <a href="https://github.com/viditasingh/Currency-Exchange" target="_blank">
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Currency Exchange App" />
              </div>
              <h2>Currency Exchange App</h2>
            </div>
            </a>

            <Button
              text="See More Projects"
              className="md:w-80 md:h-16 w-60 h-12"
              id="works"
              imgsrc='/images/arrow-right.svg'
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
