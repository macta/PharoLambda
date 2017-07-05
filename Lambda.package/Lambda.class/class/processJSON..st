as yet unclassified
processJSON: aString

	| json result |
	
	"FileStream stdout nextPutAll: Smalltalk arguments printString; lf.
	FileStream stdout nextPutAll: aString; lf."
	
	json := NeoJSONReader fromString: aString.
	
	result := self processRequest: json.
	
	FileStream stdout nextPutAll: (self jsonResponseFor: result); lf.
	
	^json
	