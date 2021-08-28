{
	// Type Inference 

	let text: string = 'hello'

	function print(message = 'hello') {
		console.log(message)
	}

	print('hello')


	// 함수는 정확히 타입 명시하는것이 좋다고 생각함.
	function add(x: number, y: number): number {
		return x + y;
	}

	const result = add(1, 2);
}