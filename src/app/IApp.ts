import { RefObject } from "react";

export interface IApp {
  nav: RefObject<HTMLElement>;
  header: RefObject<HTMLElement>;
  
  render(): JSX.Element;
}