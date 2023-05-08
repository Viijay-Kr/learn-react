import { IResource } from "../types";
export interface IuseLayoutEffect extends IResource {
  name: "useLayoutEffect";
}

export const useLayoutEffect: IuseLayoutEffect = {
  name: "useLayoutEffect",
  description:
    "useLayoutEffect can hurt performance. Prefer useEffect when possible.",
  example: {
    code: "useLayoutEffect(setup, dependencies?)",
  },
  usage: [
    {
      title: "Measuring layout before the browser repaints the screen ",
      href: "https://react.dev/reference/react/useLayoutEffect#measuring-layout-before-the-browser-repaints-the-screen",
    },
  ],
  link: "https://react.dev/reference/react/useLayoutEffect",
};
