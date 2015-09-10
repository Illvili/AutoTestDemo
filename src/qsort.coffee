qsort = (arr) ->
	if "object" != typeof arr or arr !instanceof Array
		throw new TypeError("arr should be an array")
	
	return arr if arr.length <= 1
	
	pivot = arr[0]
	less = []
	great = []
	
	for i in [1...arr.length]
		(if arr[i] <= pivot then less else great).push arr[i]
	
	less = arguments.callee less
	great = arguments.callee great
	
	less.push pivot
	Array.prototype.push.apply less, great
	
	return less

window.qsort = qsort