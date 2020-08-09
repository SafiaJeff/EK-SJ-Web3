var lemonsTimeline = gsap.timeline();
lemonsTimeline.to("#lemon1", {duration:10, rotation:360, repeat:-1, ease: "none"},"lemon")
                .to("#lemon2", {duration:15, rotation:360, repeat:-1, ease: "none"},"lemon")
                .to("#lemon3", {duration:8, rotation:-360, repeat:-1, ease: "none"},"lemon")

ScrollTrigger.create({
    trigger: "#lemons",
    start: "top 60%",
    end: "bottom 30%",
    animation: lemonsTimeline,
    toggleActions: "restart play play stop",
    // scrub: 1
    // markers: true,
    id:"lemon"
});

gsap.set("#lemon1, #lemon2, #lemon3",{transformOrigin:"center center"});

// gsap.to("#lemon",{duration:1, rotation:360, repeat:-1, ease: "none"})

