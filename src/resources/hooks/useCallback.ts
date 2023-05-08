import { IResource } from "../types";
export interface IuseCallback extends IResource {
  name: "useCallback";
}

export const useCallback: IuseCallback = {
  name: "useCallback",
  description:
    "useCallback is a React Hook that lets you cache a function definition between re-renders.",
  example: {
    code: "const cachedFn = useCallback(fn, dependencies)",
  },
  usage: [
    {
      title: "Skipping re-rendering of components ",
      href: "https://react.dev/reference/react/useCallback#skipping-re-rendering-of-components",
    },
    {
      title: "Updating state from a memoized callback ",
      href: "https://react.dev/reference/react/useCallback#updating-state-from-a-memoized-callback",
    },
    {
      title: "Preventing an Effect from firing too often ",
      href: "https://react.dev/reference/react/useCallback#preventing-an-effect-from-firing-too-often",
    },
    {
      title: "Optimizing a custom Hook ",
      href: "https://react.dev/reference/react/useCallback#optimizing-a-custom-hook",
    },
  ],
  link: "https://react.dev/reference/react/useCallback",
};
