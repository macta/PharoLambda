Usage: exec [--help] <smalltalk expression>
	--help                   list this help message
	<smallltalk expression>  a valid Smalltalk expression which is evaluated 

Documentation:
A CommandLineHandler that reads a string from the command line, evaluates it, and then quits the image. 

The <smalltalk expression> must write to stdout to return results back to the calling process.

Be careful of OS command quoting, you may have to escape ' characters e.g.:

./pharo Pharo.image  exec 'MyClass  processJSON: '\''{ "hello" : "world" }'\'''

Important: don't manually save the image at the end of the expression by calling something like 'Smalltalk snapshot: true andSave: true'!