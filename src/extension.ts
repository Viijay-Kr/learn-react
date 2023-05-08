// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { HoverProvider } from "./providers/hover";
import { providerFactory } from "./providers/factory";
import { registerWebView } from "./commands/webview";
import { ResourcesCollection } from "./resources";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

const documentSelector = [
  { scheme: "file", language: "typescriptreact" },
  { scheme: "file", language: "javascriptreact" },
  { scheme: "file", language: "typescript" },
  { scheme: "file", language: "javascript" },
];

export function activate(context: vscode.ExtensionContext) {
  const rc = new ResourcesCollection();

  const _hoverProvider = vscode.languages.registerHoverProvider(
    documentSelector,
    providerFactory(rc, HoverProvider)
  );
  context.subscriptions.push(_hoverProvider);
  context.subscriptions.push(registerWebView());
}

// This method is called when your extension is deactivated
export function deactivate() {}
