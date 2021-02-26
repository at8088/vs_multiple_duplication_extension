// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const command = 'multiple-ducplication.duplicateLineDownNTimes'
	const editor = vscode.window.activeTextEditor
	const commandHandler = (n = 5) => {

		let str = '\n' + editor.document.lineAt(editor.selection.active.line).text;
		vscode.window.activeTextEditor.edit((editBuilder) => {
			for (let i = 0; i < n; i++) {
				editBuilder.insert(editor.selection.active, str);
			}
		}, { "undoStopBefore": true, "undoStopAfter": false });

	}
	context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('multiple-ducplication.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from multiple ducplication!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
