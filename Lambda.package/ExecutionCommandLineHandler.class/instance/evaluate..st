commands
evaluate: aString
 
	[ Smalltalk compiler evaluate: aString ]
		on: Error
		do: [ :error | self handleError: error ]