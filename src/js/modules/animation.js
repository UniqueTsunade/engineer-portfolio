import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export async function animation() {

    try {

        gsap.fromTo(".header__title", 
            { 
                opacity: 0, 
                y: -100 
            }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 1, 
                ease: "power2.out" 
            }
        );
        
        gsap.fromTo(".header__delimiter", 
            { 
                opacity: 0, 
                x: -3000 
            }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 3, 
                delay: 1, 
                ease: "power2.out" 
            }
        );

        gsap.fromTo(".subtitle", 
            { 
                opacity: 0, 
                y: 500 
            }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 2, 
                delay: 1, 
                ease: "power2.out" 
            }
        );

        gsap.fromTo(".tools", 
            { 
                opacity: 0, 
                y: -100 
            }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 1, 
                ease: "power2.out" 
            }
        );

        gsap.fromTo(".skills-profile", 
            { 
                opacity: 0, 
                x: -50 
            }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 1, 
                delay: 1, 
                ease: "power2.out" 
            }
        );

        gsap.fromTo(".education", 
            
            { 
                opacity: 0, 
                x: -120, 
               
            }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 10, 
                scrollTrigger: {
                    trigger: ".education-experience-grid", 
                    start: "110", 
                    end: "320",
                    scrub: true,
                    ease: "power2.out" 
                }
            }
        );

        
        gsap.fromTo(".experience", 
            { 
                opacity: 0, 
                x: -200 
            }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 6, 
                scrollTrigger: {
                    trigger: ".education-experience-grid", 
                    start: "110", 
                    end: "320",
                    scrub: true,
                    ease: "power2.out" 
                }
            }
        );


        const imagesFirstContainer = document.querySelector(".first-block");
        const firstImages = imagesFirstContainer.querySelectorAll("img");
        
        const firstObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 170%",
                  end: "bottom 20%",
                  scrub: 1,
                },
                opacity: 0,
                y: "18%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        firstImages.forEach((image) => firstObserver.observe(image));



        const imagesSecondContainer = document.querySelector(".second-block");
        const secondImages = imagesSecondContainer.querySelectorAll("img");
        
        const secondObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 160%",
                  end: "bottom 20%",
                  scrub: 1,
                },
                opacity: 0,
                y: "20%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        secondImages.forEach((image) => secondObserver.observe(image));


        const imagesThirdContainer = document.querySelector(".third-block");
        const thirdImages = imagesThirdContainer.querySelectorAll("img");
        
        const thirdObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 160%",
                  end: "bottom 5%",
                  scrub: 1,
                },
                opacity: 0,
                x: "-50%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        thirdImages.forEach((image) => thirdObserver.observe(image));
        




        const imagesFourthContainer = document.querySelector(".fourth-block");
        const fourthImages = imagesFourthContainer.querySelectorAll("img");
        
        const fourthObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 175%",
                  end: "bottom 5%",
                  scrub: 1,
                },
                opacity: 0,
                x: "-50%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        fourthImages.forEach((image) => fourthObserver.observe(image));



        const imagesFifthContainer = document.querySelector(".fifth-block");
        const fifthImages = imagesFifthContainer.querySelectorAll("img");
        
        const fifthObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 175%",
                  end: "bottom 5%",
                  scrub: 1,
                },
                opacity: 0,
                x: "-60%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        fifthImages.forEach((image) => fifthObserver.observe(image));


        const imagesSixthContainer = document.querySelector(".sixth-block");
        const sixthImages = imagesSixthContainer.querySelectorAll("img");
        
        const sixthObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 175%",
                  end: "bottom 5%",
                  scrub: 1,
                },
                opacity: 0,
                x: "-70%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        sixthImages.forEach((image) => sixthObserver.observe(image));


        const imagesSeventhContainer = document.querySelector(".seventh-block");
        const seventhImages = imagesSeventhContainer.querySelectorAll("img");
        
        const seventhObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 175%",
                  end: "bottom 65%",
                  scrub: 1,
                },
                opacity: 0,
                y: "-20%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        seventhImages.forEach((image) => seventhObserver.observe(image));


        const imagesEighthContainer = document.querySelector(".eighth-block");
        const eighthImages = imagesEighthContainer.querySelectorAll("img");
        
        const eighthObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                scrollTrigger: {
                  trigger: entry.target,
                  start: "top 185%",
                  end: "bottom 40%",
                  scrub: 1,
                },
                opacity: 0,
                x: "-50%",
                duration: 2,
                ease: "power2.inOut",
              });
              observer.unobserve(entry.target); 
            }
          });
        });
        
        eighthImages.forEach((image) => eighthObserver.observe(image));


    } catch (error) {
        console.error("An error occurred during the animation setup:", error);
    }

}

