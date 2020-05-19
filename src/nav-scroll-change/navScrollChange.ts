import { INavScrollChange } from "./INavScrollChange";

export const navScrollChange: INavScrollChange = (
  element,
  section,
  classToEdit,
  options
) => {
  const editClass = (entry: IntersectionObserverEntry) => {
    if (element == null) return;
    if (entry.isIntersecting) element?.classList.add(classToEdit);
    else element?.classList.remove(classToEdit);
  };

  const cb: IntersectionObserverCallback = (entries) => {
    entries.forEach(editClass);
  };

  const observer = new IntersectionObserver(cb, options);

  if (section == null) return;
  observer.observe(section!);
};
