var sunTimeline = gsap.timeline();
sunTimeline.from(".suncirclepart",{duration:2, alpha:0, xPercent:30}, "suncomes")
            .from(".ray",{duration:2, alpha:0, xPercent:30}, "suncomes" )
            .from(".sunexpression",{duration:2, alpha:0})
            

ScrollTrigger.create({
    trigger: "#sun",
    start: "top 70%",
    end: "bottom 70%",
    animation: sunTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1,
    id:"#ray"
    // markers: true
});