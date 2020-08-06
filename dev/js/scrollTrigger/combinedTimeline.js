var combinedTimeline = gsap.timeline();

combinedTimeline
                .to(".cheek", {alpha:0})
                .to(".dimples", {alpha:0}, "sad","-=0.5")
                .to("#mouth",{rotation:180}, "sad")

ScrollTrigger.create({
    trigger: "#child",
    start: "top 30%",
    end: "bottom 20%",
    animation: combinedTimeline,
    toggleActions: "restart none reverse none",
    scrub: 5,
    id: "combo",
    markers: true
});                


// .to("#juice",{yPercent: 105})