gsap.to("#child",{scrollTrigger:{
    trigger:"#child",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom -1700px",
    markers:true,
    id:"child-pin"
}})