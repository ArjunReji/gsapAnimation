const tl = gsap.timeline();

// Logo spin and scale
tl.to(".logo", {
    rotation: 360,
    scale: 1.1,
    duration: 3,
    ease: "elastic.out(1, 0.3)",
    repeat: -1,
    repeatDelay: 1
}, 0); // Starts at 0s

// Navbar fade-in
tl.from(".nav_bar", {
    duration: 1,
    opacity: 0
}, 1); // Starts at 1s

// Homecard breathing
tl.to(".homecard", {
    scale: 1.1,
    duration: 1,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
}, 2); // Starts at 2s


// Hover Animation
gsap.from(".cards", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
      trigger: ".card_container",
      start: "top 80%",
      toggleActions: "play none none reset"
  }
});

// Hover Animation
document.querySelectorAll(".cards").forEach(card => {
  card.addEventListener("mouseenter", () => {
      gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power1.out"
      });
  });
  card.addEventListener("mouseleave", () => {
      gsap.to(card, {
          scale: 1,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power1.out"
      });
  });
});