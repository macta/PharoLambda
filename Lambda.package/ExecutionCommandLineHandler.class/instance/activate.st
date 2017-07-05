commands
activate
	self activateHelp
		ifTrue: [  ^ self ].
		
	self arguments 
		ifEmpty: [ ^ self help ].
		
	self 
		evaluate: self argumentString;
		quit