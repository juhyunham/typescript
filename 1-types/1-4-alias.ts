{
	// Type Alias - 타입 정의가능

	type Text = string;
	const name: Text = 'ellie'
	const address: Text = 'korea'
	type Num = number;
	type Student = {
		name: string,
		age: number
	}

	const student: Student = {
		name: 'juham',
		age: 31,
	}

	// String Literal Types - 문자열도 타입으로 정할 수 있음
	type Name = 'name'
	let juhyunName: Name;
	juhyunName = 'name'

	type JSON = 'json'
	const json: JSON = 'json'
}