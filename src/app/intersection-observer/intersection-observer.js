export function intersectionObserver(element, section, classToEdit, options) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.classList.add(classToEdit);
      } else {
        element.classList.remove(classToEdit);
      }
    });
  }, options);

  observer.observe(section);
}
