import { IResource } from "../types";
export interface IuseMemo extends IResource {
  name: "useMemo";
}

export const useMemo: IuseMemo = {
  name: "useMemo",
  description:
    "useMemo is a React Hook that lets you cache the result of a calculation between re-renders.",
  example: {
    code: "const cachedValue = useMemo(calculateValue, dependencies)",
  },
  usage: [
    {
      title: "Skipping expensive recalculations ",
      href: "https://react.dev/reference/react/useMemo#skipping-expensive-recalculations",
    },
    {
      title: "Skipping re-rendering of components ",
      href: "https://react.dev/reference/react/useMemo#skipping-re-rendering-of-components",
    },
    {
      title: "Memoizing a dependency of another Hook ",
      href: "https://react.dev/reference/react/useMemo#memoizing-a-dependency-of-another-hook",
    },
    {
      title: "Memoizing a function ",
      href: "https://react.dev/reference/react/useMemo#memoizing-a-function",
    },
  ],
  link: "https://react.dev/reference/react/useMemo",
};
