{
	//JavaScript 💩
	// function jsAdd(num1, num2) {
	// 	return num1 + num2
	// }

	// //TypeScript ✨
	// function add(num1: number, num2: number): number {
	// 	return num1 + num2
	// }

	// //JavaScript 💩
	// function jsFetchNum(id) {
	// 	//code..
	// 	//code..

	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	})
	// }

	// //TypeScript ✨
	// function fetchNum(id: string): Promise<number> {
	// 	//code..
	// 	//code..

	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	})
	// }

	//JavaScript 💩 => TypeScript ✨
	function printName(firstName: string, lastName?: string | undefined) {
		console.log(firstName)
		console.log(lastName)
	}

	printName(`ham`, `juhyun`)
	printName(`ham`, undefined)

	//Rest parameter
	function addNumbers(...numbers: number: []): number {
		return numbers.reduce((a, b) => a + b)
	}

	console.log(addNumbers(1, 2))
}