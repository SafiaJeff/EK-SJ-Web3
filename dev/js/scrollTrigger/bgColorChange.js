// gsap.to("#content",{duration:10, backgroundColor:"#B1DFFC"});

var bgTimeline = gsap.timeline();
bgTimeline.to("#content",{backgroundColor:"#B1DFFC"});
                

ScrollTrigger.create({
    trigger: "#sun",
    start: "top 60%",
    end: "bottom 30%",
    animation: bgTimeline,
    toggleActions: "restart play play stop",
    scrub: 1,
    markers: true,
    id:"bg-color-change"
});