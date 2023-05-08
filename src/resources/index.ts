import { Resources } from "./types";
import hooks from "./hooks";

export class ResourcesCollection {
  private resources: Map<string, Resources> = new Map();

  constructor() {
    hooks.forEach((r) => this.resources.set(r.name, r));
  }

  resource(name: string) {
    const resource = this.resources.get(name);
    if (!resource) {
      return;
    }
    return resource;
  }
}
