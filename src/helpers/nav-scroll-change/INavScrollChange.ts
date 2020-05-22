export interface INavScrollChange {
  (
    element: HTMLElement | null,
    section: HTMLElement | null,
    classToEdit: string,
    options?: IntersectionObserverInit | undefined
  ): void;
}
