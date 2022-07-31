const tl = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "power1.out"
    }
});

// Set default animation to container, svg and text
tl.fromTo('.cookie-container', {scale: 0,},{scale: 1})
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, "<79%")
tl.fromTo('.text', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<')

// Cookie jump
tl.fromTo(".cookie", {y: 0}, {y: -12, yoyo: true, repeat: -1, rotation: '-10deg'}, "<79%")
tl.fromTo("#Crumbs", {y: 0}, {y: -5, yoyo: true, repeat: -1}, "<")

// Fading the cookie out
const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, duration: 0.75, ease: 'power1.out'})
});