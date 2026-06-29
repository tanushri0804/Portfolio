/**
 * Kills all active GSAP ScrollTrigger instances and clears any pin-related
 * inline styles that GSAP may have left on html/body.
 * Call this before any React Router navigation to prevent the "frozen page" bug.
 */
export const killScrollTrigger = async () => {
  try {
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    ScrollTrigger.getAll().forEach((st) => st.kill());
  } catch {
    // GSAP not loaded yet — nothing to kill
  }
  // Clear pin styles regardless
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
};
