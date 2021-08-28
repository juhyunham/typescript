{
	// 타입 강요 💩


	function isStrFunc(): any {
		return 'hello'
	}

	const result = jsStrFunc();
	console.log((result as string).length)
	console.log((<string>result).length)
}