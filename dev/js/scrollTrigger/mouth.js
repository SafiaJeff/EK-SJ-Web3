var mouthTimeline = gsap.timeline();
mouthTimeline.to("#mouth",{duration:1, rotation:180})


//add transformOrigin

ScrollTrigger.create({
    trigger: "#child",
    start: "top 80%",
    end: "bottom 80%",
    animation: mouthTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1
    // markers: true
});