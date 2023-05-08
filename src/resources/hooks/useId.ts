import { IResource } from "../types";
export interface IuseId extends IResource {
  name: "useId";
}

export const useId: IuseId = {
  name: "useId",
  description:
    "useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.",
  example: {
    code: "const id = useId()",
  },
  usage: [
    {
      title: "Generating unique IDs for accessibility attributes ",
      href: "https://react.dev/reference/react/useId#generating-unique-ids-for-accessibility-attributes",
    },
    {
      title: "Generating IDs for several related elements ",
      href: "https://react.dev/reference/react/useId#generating-ids-for-several-related-elements",
    },
    {
      title: "Specifying a shared prefix for all generated IDs ",
      href: "https://react.dev/reference/react/useId#specifying-a-shared-prefix-for-all-generated-ids",
    },
  ],
  link: "https://react.dev/reference/react/useId",
};
