var juiceTimeline = gsap.timeline();
juiceTimeline.to("#juice",{duration:5, yPercent: 80})

ScrollTrigger.create({
    trigger: "#right-arm",
    start: "top 70%",
    end: "bottom -1800px",
    animation: juiceTimeline,
    toggleActions: "restart none reverse none",
    scrub: 30,
    id: "juice"
    // markers: true
});