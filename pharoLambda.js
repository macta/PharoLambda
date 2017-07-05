// AWS node.js adaptor script to call Pharo Smalltalk for lambda execution
// Author: Tim Mackinnon 
// License: "THE BEER-WARE LICENSE" (Revision 42):
// <tim@morethan.technology> wrote this. You can do whatever you want with it. 
// If we meet some day and you think it had value, you can buy me a beer in return

const exec = require('child_process').exec;

exports.handler = function(event, context) {
	const cmdLine = "./pharo Pharo.image --no-default-preferences exec 'Lambda processJSON: '\\''" 
    	+ JSON.stringify(event) + "'\\'''";
    	
    console.log("exec(\"" + cmdLine + "\")");
    
    exec(cmdLine, (error, stdoutResult, stderrResult) => {
    	if(error) {
    		console.error(`exec error: ${error}`);
       		context.done(error, "lambda exec failure");
       	} else {
       		console.log(`exec success`);
       		const result = JSON.parse(stdoutResult);
		
			context.succeed({ "response": result });
       	}
    });
}
