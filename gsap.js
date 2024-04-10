var web = gsap.timeline()
web.from(".nav h3",{
    y: -50,
    duration: 1,
    opacity: 0,
    dellay: 0.5,
    stagger: 0.3
})
web.from("h1", {
    x: -500,
    opacity: 0,
    dutration: 1,
    dellay: 1,
    stagger: 0.5
})
web.from(" img", {
    x: 600,
    opacity: 0,
    scaller: 5,
    rotate: 45,
    duration: 0.5,
    stagger: 0.5,
   

})