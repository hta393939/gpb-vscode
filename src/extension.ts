import * as vscode from 'vscode';
import { GpbLiteEditorProvider } from './gpbliteeditor';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(GpbLiteEditorProvider.register(context));
}

// This method is called when your extension is deactivated
export function deactivate() {}
