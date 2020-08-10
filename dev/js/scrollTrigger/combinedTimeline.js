var combinedTimeline = gsap.timeline();

combinedTimeline.to("#mouth",{duration:1, scale:0.5}, "drinking")
                .to(".cheek", {alpha:0}, "drinking")
                .to(".dimples", {alpha:0}, "sad")
                .to("#mouth",{rotation:180, scale:1}, "sad")
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