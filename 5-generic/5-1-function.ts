{
	function checkNotNullBad(arg: number | null): number {
		if (arg === null) {
			throw new Error(`not valid number!`)
		}

		return arg;
	}

	// 제네릭이라는 타입을 받아서 제네릭을 리턴하는 함수입니다.
	function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
		if (arg === null) {
			throw new Error(`not valid number!`)
		}
		return arg;
	}

	const number = checkNotNullBad(123);
	const boal: boolean = checkNotNull(true);
	console.log(number, boal)
}