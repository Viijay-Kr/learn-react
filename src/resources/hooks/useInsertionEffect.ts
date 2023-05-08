import { IResource } from "../types";
export interface IuseInsertionEffect extends IResource {
  name: "useInsertionEffect";
}

export const useInsertionEffect: IuseInsertionEffect = {
  name: "useInsertionEffect",
  description:
    "useInsertionEffect is for CSS-in-JS library authors. Unless you are working on a CSS-in-JS library and need a place to inject the styles, you probably want useEffect or useLayoutEffect instead.",
  example: {
    code: "useInsertionEffect(setup, dependencies?)",
  },
  usage: [
    {
      title: "Injecting dynamic styles from CSS-in-JS libraries ",
      href: "https://react.dev/reference/react/useInsertionEffect#injecting-dynamic-styles-from-css-in-js-libraries",
    },
  ],
  link: "https://react.dev/reference/react/useInsertionEffect",
};
