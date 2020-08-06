var lemonsTimeline = gsap.timeline();
lemonsTimeline.to(".lemon", {duration:1, alpha:1})

ScrollTrigger.create({
    trigger: "#lemons",
    start: "top 60%",
    end: "bottom 60%",
    animation: lemonsTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1
    // markers: true
});