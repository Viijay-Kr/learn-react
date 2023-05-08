import { IResource } from "../types";
export interface IuseTransition extends IResource {
  name: "useTransition";
}

export const useTransition: IuseTransition = {
  name: "useTransition",
  description:
    "useTransition is a React Hook that lets you update the state without blocking the UI.",
  example: {
    code: "const [isPending, startTransition] = useTransition()",
  },
  usage: [
    {
      title: "Marking a state update as a non-blocking transition ",
      href: "https://react.dev/reference/react/useTransition#marking-a-state-update-as-a-non-blocking-transition",
    },
    {
      title: "Updating the parent component in a transition ",
      href: "https://react.dev/reference/react/useTransition#updating-the-parent-component-in-a-transition",
    },
    {
      title: "Displaying a pending visual state during the transition ",
      href: "https://react.dev/reference/react/useTransition#displaying-a-pending-visual-state-during-the-transition",
    },
    {
      title: "Preventing unwanted loading indicators ",
      href: "https://react.dev/reference/react/useTransition#preventing-unwanted-loading-indicators",
    },
    {
      title: "Building a Suspense-enabled router ",
      href: "https://react.dev/reference/react/useTransition#building-a-suspense-enabled-router",
    },
  ],
  link: "https://react.dev/reference/react/useTransition",
};
