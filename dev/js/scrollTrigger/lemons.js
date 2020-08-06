var lemonsTimeline = gsap.timeline();
lemonsTimeline.to(".lemon", {duration:10, rotate: 360, repeat:5, repeatDelay: 1})

ScrollTrigger.create({
    trigger: "#lemons",
    start: "top 60%",
    end: "bottom 30%",
    animation: lemonsTimeline,
    toggleActions: "restart play play stop",
    // scrub: 1
    // markers: true,
    id:"lemon"
});

gsap.set(".lemon",{transformOrigin:"center center"});