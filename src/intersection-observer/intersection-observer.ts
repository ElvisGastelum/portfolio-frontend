export function intersectionObserver(element: HTMLElement | null, section: HTMLElement | null, classToEdit: string, options: object) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element!.classList.add(classToEdit);
      } else {
        element!.classList.remove(classToEdit);
      }
    });
  }, options);

  observer.observe(section!);
}
