// gsap.to("#content",{duration:10, backgroundColor:"#B1DFFC"});

var bgTimeline = gsap.timeline();
bgTimeline.to("#content",{backgroundColor:"#B1DFFC"})
            // .to("#content",{backgroundColor:"#FFFDF3"});
                

ScrollTrigger.create({
    trigger: "#color-change-bg",
    start: "top 60%",
    end: "bottom 50%",
    animation: bgTimeline,
    toggleActions: "restart play none none",
    scrub: 1,
    // markers: true,
    id:"bg-color-change"
});