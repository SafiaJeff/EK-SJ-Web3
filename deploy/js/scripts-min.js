gsap.registerPlugin(ScrollTrigger);var arrowTimeline=gsap.timeline();arrowTimeline.from("#down-arrow",{duration:5,rotate:360}),ScrollTrigger.create({trigger:"#other-links",start:"top 40%",end:"bottom 40%",animation:arrowTimeline,toggleActions:"restart none reverse none",scrub:1});var lemonsTimeline=gsap.timeline();lemonsTimeline.to("#lemon1",{duration:10,rotation:360,repeat:-1,ease:"none"},"lemon").to("#lemon2",{duration:15,rotation:360,repeat:-1,ease:"none"},"lemon").to("#lemon3",{duration:8,rotation:-360,repeat:-1,ease:"none"},"lemon"),ScrollTrigger.create({trigger:"#lemons",start:"top 60%",end:"bottom 30%",animation:lemonsTimeline,toggleActions:"restart play play stop",id:"lemon"}),gsap.set("#lemon1, #lemon2, #lemon3",{transformOrigin:"center center"});var sunTimeline=gsap.timeline();sunTimeline.from(".suncirclepart",{duration:2,alpha:0,xPercent:30},"suncomes").from(".ray",{duration:2,alpha:0,xPercent:30},"suncomes").from(".sunexpression",{duration:2,alpha:0}),ScrollTrigger.create({trigger:"#sun",start:"top 70%",end:"bottom 70%",animation:sunTimeline,toggleActions:"restart none reverse none",scrub:1,id:"#ray"});var juiceTimeline=gsap.timeline();juiceTimeline.to("#juice",{duration:5,yPercent:80}),ScrollTrigger.create({trigger:"#right-arm",start:"top 70%",end:"bottom -1800px",animation:juiceTimeline,toggleActions:"restart none reverse none",scrub:30,id:"juice"});var combinedTimeline=gsap.timeline();combinedTimeline.to(".cheek",{alpha:0}).to(".dimples",{alpha:0},"sad").to("#mouth",{rotation:180},"sad").to("#right-eyebrow",{rotation:30},"sad").to("#left-eyebrow",{rotation:-30},"sad"),ScrollTrigger.create({trigger:"#child",start:"top 20%",end:"bottom -1700px",animation:combinedTimeline,toggleActions:"restart none reverse none",scrub:5,id:"face-combo",stagger:5}),gsap.set("#mouth",{transformOrigin:"center center"}),gsap.set("#right-eyebrow",{transformOrigin:"center center"}),gsap.set("#left-eyebrow",{transformOrigin:"center center"}),gsap.to("#child",{scrollTrigger:{trigger:"#child",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom -1700px",id:"child-pin"}});var leftXPercent=10,RightXPercent=-10,storyTextTimeline=gsap.timeline();storyTextTimeline.from("#part1L",{alpha:0,xPercent:leftXPercent}).from("#part1R",{alpha:0,xPercent:RightXPercent}).from("#part2L",{alpha:0,xPercent:leftXPercent}).from("#part2R",{alpha:0,xPercent:RightXPercent}).from("#part3L",{alpha:0,xPercent:leftXPercent}).from("#part3R",{alpha:0,xPercent:RightXPercent}).from("#part4L",{alpha:0,xPercent:leftXPercent}),ScrollTrigger.create({trigger:"#story-text",start:"top 90%",end:"bottom 100%",animation:storyTextTimeline,toggleActions:"restart pause play stop",scrub:1,id:"story-text"});var bgTimeline=gsap.timeline();bgTimeline.to("#content",{backgroundColor:"#B1DFFC"}),ScrollTrigger.create({trigger:"#color-change-bg",start:"top 60%",end:"bottom 50%",animation:bgTimeline,toggleActions:"restart play none none",scrub:1,id:"bg-color-change"});