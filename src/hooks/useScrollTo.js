export const useScrollTo = ({ sectionName }) => {
  const targetSection = document.getElementById(sectionName);
  // 85 is the height of the navbar which if is not substracted, will be on the title of the sections
  const targetOffset = targetSection.offsetTop - 85;

  window.scrollTo({
    top: targetOffset,
    behavior: "smooth",
  });
};
