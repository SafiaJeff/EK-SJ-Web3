gsap.to("#child",{scrollTrigger:{
    trigger:"#child",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom 0%",
    markers:true,
    id:"child-pin"
}})