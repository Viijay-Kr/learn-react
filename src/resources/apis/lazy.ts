import { IResource } from "../types";
export interface Ilazy extends IResource {
  name: "lazy";
}

export const lazy: Ilazy = {
  name: "lazy",
  description:
    "lazy lets you defer loading component’s code until it is rendered for the first time.",
  example: {
    code: "const SomeComponent = lazy(load)",
  },
  usage: [
    {
      title: "Lazy-loading components with Suspense ",
      href: "https://react.dev/reference/react/lazy#suspense-for-code-splitting",
    },
  ],
  link: "https://react.dev/reference/react/lazy",
};
