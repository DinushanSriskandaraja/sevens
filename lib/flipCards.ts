/**
 * Interactive 3D Flip Card Animation Controller
 * Eliminates rolling / flickering / hit-test bounce on hover
 */
export function initFlipCards() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Target ONLY the outer static container .c-flip-card
  const cards = document.querySelectorAll<HTMLElement>(".c-flip-card");

  cards.forEach((cardContainer) => {
    if ((cardContainer as any).__flipInitialized) return;
    (cardContainer as any).__flipInitialized = true;

    const flipCard = cardContainer.querySelector<HTMLElement>("._w-flip-card") || cardContainer;
    const frontEl = cardContainer.querySelector<HTMLElement>(".c-card-front");
    const backEl = cardContainer.querySelector<HTMLElement>(".c-card-back");

    if (!frontEl || !backEl) return;

    const front: HTMLElement = frontEl;
    const back: HTMLElement = backEl;

    // Ensure fixed height and 3D setup
    cardContainer.style.height = "277px";
    cardContainer.style.perspective = "1000px";
    cardContainer.style.webkitPerspective = "1000px";
    cardContainer.style.cursor = "pointer";

    flipCard.style.height = "100%";
    flipCard.style.width = "100%";
    flipCard.style.perspective = "1000px";
    flipCard.style.webkitPerspective = "1000px";
    flipCard.style.pointerEvents = "none"; // CRITICAL: Children don't intercept hit-tests

    front.style.height = "277px";
    front.style.width = "100%";
    front.style.backfaceVisibility = "hidden";
    front.style.webkitBackfaceVisibility = "hidden";
    front.style.transformStyle = "preserve-3d";
    front.style.webkitTransformStyle = "preserve-3d";
    front.style.transformOrigin = "50% 50%";
    front.style.display = "flex";
    front.style.transform = "rotateY(0deg)";
    front.style.pointerEvents = "none";

    back.style.height = "277px";
    back.style.width = "100%";
    back.style.backfaceVisibility = "hidden";
    back.style.webkitBackfaceVisibility = "hidden";
    back.style.transformStyle = "preserve-3d";
    back.style.webkitTransformStyle = "preserve-3d";
    back.style.transformOrigin = "50% 50%";
    back.style.display = "none";
    back.style.transform = "rotateY(-90deg)";
    back.style.pointerEvents = "none";

    let isFlipped = false;
    let flipInTimeline: any = null;
    let flipOutTimeline: any = null;

    function flip(toFlipped: boolean) {
      if (isFlipped === toFlipped) return;
      isFlipped = toFlipped;

      const gsap = (window as any).gsap;

      if (toFlipped) {
        // FLIP IN
        if (gsap) {
          if (flipOutTimeline) flipOutTimeline.kill();
          gsap.killTweensOf([front, back]);

          flipInTimeline = gsap.timeline();
          flipInTimeline
            .to(front, {
              rotateY: 90,
              duration: 0.22,
              ease: "power2.in",
            })
            .set(front, { display: "none" })
            .set(back, { display: "flex", rotateY: -90 })
            .to(back, {
              rotateY: 0,
              duration: 0.22,
              ease: "power2.out",
            });
        } else {
          front.style.display = "none";
          back.style.display = "flex";
          back.style.transform = "rotateY(0deg)";
        }
      } else {
        // FLIP OUT
        if (gsap) {
          if (flipInTimeline) flipInTimeline.kill();
          gsap.killTweensOf([front, back]);

          flipOutTimeline = gsap.timeline();
          flipOutTimeline
            .to(back, {
              rotateY: -90,
              duration: 0.22,
              ease: "power2.in",
            })
            .set(back, { display: "none" })
            .set(front, { display: "flex", rotateY: 90 })
            .to(front, {
              rotateY: 0,
              duration: 0.22,
              ease: "power2.out",
            });
        } else {
          back.style.display = "none";
          front.style.display = "flex";
          front.style.transform = "rotateY(0deg)";
        }
      }
    }

    // Rock-solid Mouse Enter
    cardContainer.addEventListener("mouseenter", () => {
      flip(true);
    });

    // Rock-solid Mouse Leave with coordinate verification to prevent rolling
    cardContainer.addEventListener("mouseleave", (e: MouseEvent) => {
      const rect = cardContainer.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      // If cursor is still inside bounding box (within 1px margin), ignore false leave
      if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
        return;
      }
      flip(false);
    });

    // Touchscreen / Click toggle
    cardContainer.addEventListener("click", () => {
      flip(!isFlipped);
    });
  });
}
