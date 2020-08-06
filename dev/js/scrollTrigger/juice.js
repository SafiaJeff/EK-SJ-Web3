var juiceTimeline = gsap.timeline();
juiceTimeline.to("#juice",{duration:5, yPercent: 105})

ScrollTrigger.create({
    trigger: "#child",
    start: "top 50%",
    end: "bottom 50%",
    animation: juiceTimeline,
    toggleActions: "restart none reverse none",
    scrub: 5
    // markers: true
});