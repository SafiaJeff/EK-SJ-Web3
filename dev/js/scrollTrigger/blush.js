var blushTimeline = gsap.timeline();
blushTimeline.to(".cheek", {duration: 3, alpha:0})


ScrollTrigger.create({
    trigger: "#child",
    start: "top 60%",
    end: "bottom 60%",
    animation: blushTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1,
    id: ".cheek",
    markers: true
});



