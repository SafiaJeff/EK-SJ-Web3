var juiceTimeline = gsap.timeline();
juiceTimeline.to("#juice",{duration:5, yPercent: 20})

ScrollTrigger.create({
    trigger: "#child",
    start: "top 30%",
    end: "bottom 40%",
    animation: juiceTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1,
    markers: true
});