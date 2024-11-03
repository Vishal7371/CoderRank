// Load GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create the main timeline for initial animations
var tl = gsap.timeline();
tl.from("nav h1, nav h4, nav button", {
    y: -30,
    duration: 0.7,
    delay: 1,
    opacity: 0,
    stagger: 0.15
})
.from(".center-part1", {
    x: -200,
    opacity: 0,
    duration: 0.5
})
.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4
})
.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4
})
.from(".center-part2 img", {
    opacity: 0,
    duration: 0.5,
    x: 200
}, "-=0.5")
.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6
});

// Create a second timeline for scroll-triggered animations
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top 60%",
        end: "top -50%",
        scrub: 2
    }
});

tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5
})
.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 1
}, "anim1")
.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 1
}, "anim1")
.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 1
}, "anim2")
.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 1
}, "anim2")
.from(".elem.line3.left", {
    x: -300,
    opacity: 0,
    duration: 1
}, "anim3")
.from(".elem.line3.right", {
    x: 300,
    opacity: 0,
    duration: 1
}, "anim3")
.from(".elem.line4.left", {
    x: -300,
    opacity: 0,
    duration: 1
}, "anim4")
.from(".elem.line4.right", {
    x: 300,
    opacity: 0,
    duration: 1
}, "anim4");
