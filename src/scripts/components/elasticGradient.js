import { gsap } from "gsap";

const items = document.querySelectorAll(".elastic-gradient");

if (items.length) {
  const getRandomBorderRadius = () => {
    return `${rand()}% ${rand()}% ${rand()}% ${rand()}% / ${rand()}% ${rand()}% ${rand()}% ${rand()}%`;
  }

  const rand = () => {
    return Math.floor(Math.random() * 91) + 5;
  }

  const animate = (item) => {
    const states = [getRandomBorderRadius(), getRandomBorderRadius(), getRandomBorderRadius(), getRandomBorderRadius(), getRandomBorderRadius()];

    gsap.timeline({ repeat: -1, yoyo: true })
      .to(item, { borderRadius: states[0], duration: 2, ease: "power2.inOut" })
      .to(item, { borderRadius: states[1], duration: 2, ease: "power2.inOut" })
      .to(item, { borderRadius: states[2], duration: 2, ease: "power2.inOut" })
      .to(item, { borderRadius: states[3], duration: 2, ease: "power2.inOut" })
      .to(item, { borderRadius: states[4], duration: 2, ease: "power2.inOut" });

  }

  items.forEach(item => animate(item))
}
