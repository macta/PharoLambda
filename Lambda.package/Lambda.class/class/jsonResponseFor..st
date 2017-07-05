as yet unclassified
jsonResponseFor: aString
	|  answer |
	answer := { 
		#outputSpeech -> { #type -> 'PlainText'. #text -> aString } asDictionary. 
		#card -> { #type -> 'Simple'. #title -> 'Genius'. #content -> 'Operation Successful' } asDictionary.
		#shouldEndSession -> true } asDictionary.
		
	^STONJSON toString: answer