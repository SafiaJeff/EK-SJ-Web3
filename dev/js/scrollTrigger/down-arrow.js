

var arrowTimeline = gsap.timeline();
arrowTimeline.from("#down-arrow",{duration:5, rotate:360, alpha:0})
            

ScrollTrigger.create({
    trigger: "#other-links",
    start: "top 30%",
    end: "bottom 40%",
    animation: arrowTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1
    // markers: true
});