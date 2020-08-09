var storyTextTimeline = gsap.timeline();
storyTextTimeline.from("#part1L", {alpha:0, xPercent:10})
                .from("#part1R", {alpha:0, xPercent:-10})
                .from("#part2L", {alpha:0, xPercent:10})
                .from("#part2R", {alpha:0, xPercent:-10})
                .from("#part3L", {alpha:0, xPercent:10})
                .from("#part3R", {alpha:0, xPercent:-10})
                .from("#part4L", {alpha:0, xPercent:10})


ScrollTrigger.create({
    trigger: "#story-text",
    start: "top 90%",
    end: "bottom 100%",
    animation: storyTextTimeline,
    toggleActions: "restart pause play stop",
    scrub: 1,
    markers: true,
    id:"story-text"
});
