{
	//number
	const num: number = -0.13

	//string
	const str: string = `hello`

	//boolean
	const boal: boolean = false

	//undefined
	let name: undefined; // 💩
	let age: number | undefined

	//null
	let person: null;
	let person2: string | null;

	// unknown 💩
	let notSure: unknown = 0
	notSure = 'he'
	notSure = true

	// any 💩
	let anything: any = 0;
	anything = 'hello'

	// void
	function print(): void {
		console.log('hello')
		return;
	}
}