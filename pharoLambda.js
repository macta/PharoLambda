// AWS node.js adaptor script to call Pharo Smalltalk for lambda execution
// Author: Tim Mackinnon 
// License: "THE BEER-WARE LICENSE" (Revision 42):
// <tim@morethan.technology> wrote this. You can do whatever you want with it. 
// If we meet some day and you think it had value, you can buy me a beer in return

const exec = require('child_process').exec;

exports.handler = function(event, context) {

    const child = exec('./pharo Pharo.image --no-default-preferences eval "Lambda processJSON: \'' 
    	+ JSON.stringify(event).replace(/"/g,'\\"') + '\'"', (error) => {
       		context.done(error, 'Process complete!');
    });

	child.stderr.on('data', console.error);
	
	child.stdout.on('data', function(data) {
		console.log(data);
		result = JSON.parse(data);
		context.succeed(result);
	});

}

function output(text, context) {

    var response = {
        outputSpeech: {
            type: "PlainText",
            text: text
        },
        card: {
            type: "Simple",
            title: "Heat Genius",
            content: text
        },
        shouldEndSession: true
    };
    
    context.succeed( { response: response } );
}
