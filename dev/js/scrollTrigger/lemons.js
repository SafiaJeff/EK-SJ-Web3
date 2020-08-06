var lemonsTimeline = gsap.timeline();
lemonsTimeline.to(".lemon", {duration:5, rotate: 360, repeat:-1, repeatDelay: 0})

ScrollTrigger.create({
    trigger: "#lemons",
    start: "top 60%",
    end: "bottom 30%",
    animation: lemonsTimeline,
    toggleActions: "restart play reverse none",
    // scrub: 1
    markers: true
});

gsap.set(".lemon",{transformOrigin:"center center"});