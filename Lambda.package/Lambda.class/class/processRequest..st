as yet unclassified
processRequest: json
	
	| hour greeting minutes now |
	
	now := Time now.
	hour := now hour.
	greeting := ({ 
		(0 to: 11) -> 'Good Morning'. 
		(12 to: 16) -> 'Good Afternoon'. 
		(17 to: 24) -> 'Good Evening' } 
			detect: [ :v | v key includes: hour ]) value.
	
	minutes := now minutes asWords.
	now minutes < 10 ifTrue: [  minutes := 'oh ', minutes ].
	
	^greeting, ' it''s ', hour asWords, ' ', minutes