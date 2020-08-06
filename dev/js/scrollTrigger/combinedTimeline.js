var combinedTimeline = gsap.timeline();

combinedTimeline.to(".cheek", {alpha:0})
                .to(".dimples", {alpha:0})
                .to("#mouth",{rotation:180})

ScrollTrigger.create({
    trigger: "#child",
    start: "top 20%",
    end: "bottom -1700px",
    animation: combinedTimeline,
    toggleActions: "restart none reverse none",
    scrub: 5,
    id: "face-combo",
    stagger: 5
    // markers: true
});                


gsap.set("#mouth",{transformOrigin:"center center"});