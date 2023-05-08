import * as vscode from "vscode";
import { ResourcesCollection } from "../resources";

export class HoverProvider implements vscode.HoverProvider {
  private resourceCollection: ResourcesCollection;

  constructor(rc: ResourcesCollection) {
    this.resourceCollection = rc;
  }

  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Hover> {
    try {
      const range = document.getWordRangeAtPosition(position);
      const wordAtRange = document.getText(range);
      const resource = this.resourceCollection.resource(wordAtRange);
      if (resource) {
        const { example, usage, description, name, link } = resource;
        const mdString = new vscode.MarkdownString(
          `**Learn React**(hooks/${name})\n\n`
        );
        mdString.isTrusted = true;
        mdString.supportHtml = true;
        mdString.appendMarkdown(
          `**${name}**\n\n${description}\n\n**Example**\n`
        );

        mdString.appendCodeblock(example.code, "typescript");

        mdString.appendMarkdown(
          `\n\n**Usage**\n${usage
            .map(
              (u) =>
                `* [${
                  u.title
                }](command:learn-react.view-resource?${encodeURIComponent(
                  JSON.stringify({
                    link: u.href,
                    name: `${resource.name} | ${u.title}`,
                  })
                )})\n`
            )
            .join("")}\n\n`
        );

        mdString.appendMarkdown(
          `[Learn More](${link}) | [View](command:learn-react.view-resource?${encodeURIComponent(
            JSON.stringify({ link, name })
          )})\n\n`
        );

        return new vscode.Hover(mdString);
      }
    } catch (e) {}
    return;
  }
}