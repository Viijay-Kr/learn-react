import { Resources } from "./types";
import hooks from "./hooks";
import components from "./components";
import apis from "./apis";
import domApis from "./dom-apis";

export class ResourcesCollection {
  private resources: Map<
    string,
    Resources & { type: "hooks" | "components" | "apis" | "react-dom" }
  > = new Map();

  constructor() {
    hooks.forEach((r) => this.resources.set(r.name, { ...r, type: "hooks" }));
    components.forEach((r) =>
      this.resources.set(r.name, { ...r, type: "components" })
    );
    apis.forEach((r) => this.resources.set(r.name, { ...r, type: "apis" }));
    domApis.forEach((r) =>
      this.resources.set(r.name, { ...r, type: "react-dom" })
    );
  }

  resource(name: string) {
    const resource = this.resources.get(name);
    if (!resource) {
      return;
    }
    return resource;
  }
}
