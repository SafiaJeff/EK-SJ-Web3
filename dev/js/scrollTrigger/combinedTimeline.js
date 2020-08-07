var combinedTimeline = gsap.timeline();

combinedTimeline.to(".cheek", {alpha:0})
                .to(".dimples", {alpha:0}, "sad")
                .to("#mouth",{rotation:180}, "sad")
                .to("#right-eyebrow", {rotation:30}, "sad")
                .to("#left-eyebrow", {rotation:-30}, "sad")

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
gsap.set("#right-eyebrow",{transformOrigin:"center center"});
gsap.set("#left-eyebrow",{transformOrigin:"center center"});