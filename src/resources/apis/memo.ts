import { IResource } from "../types";
export interface Imemo extends IResource {
  name: "memo";
}

export const memo: Imemo = {
  name: "memo",
  description:
    "memo lets you skip re-rendering a component when its props are unchanged.",
  example: {
    code: "const MemoizedComponent = memo(SomeComponent, arePropsEqual?)",
  },
  usage: [
    {
      title: "Skipping re-rendering when props are unchanged ",
      href: "https://react.dev/reference/react/memo#skipping-re-rendering-when-props-are-unchanged",
    },
    {
      title: "Updating a memoized component using state ",
      href: "https://react.dev/reference/react/memo#updating-a-memoized-component-using-state",
    },
    {
      title: "Updating a memoized component using a context ",
      href: "https://react.dev/reference/react/memo#updating-a-memoized-component-using-a-context",
    },
    {
      title: "Minimizing props changes ",
      href: "https://react.dev/reference/react/memo#minimizing-props-changes",
    },
    {
      title: "Specifying a custom comparison function ",
      href: "https://react.dev/reference/react/memo#specifying-a-custom-comparison-function",
    },
  ],
  link: "https://react.dev/reference/react/memo",
};
