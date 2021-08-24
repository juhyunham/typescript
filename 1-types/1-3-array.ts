{
	//Array
	const fruits: string[] = ['🍎', '🍌']
	const scores: Array<number> = [1, 3, 4]

	function printArray(fruits: readonly string[]) {
		// 절대 변경 불가능!
		// fruits.push()
	}

	// Tuple 💩 -> interface, type alias, class
	let student: [string, number];
	student = ['name', 123]
	student[0] // name
	student[1] // 123
}