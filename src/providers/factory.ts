import { ResourcesCollection } from "../resources";
import { HoverProvider } from "./hover";

type Providers = typeof HoverProvider;

export function providerFactory(rc: ResourcesCollection, provider: Providers) {
  return new provider(rc);
}
