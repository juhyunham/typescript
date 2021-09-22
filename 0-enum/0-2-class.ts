// class test

class Developer {
	readonly name: string;
	constructor(theName: string) {
		this.name = theName
	}
}

let john = new Developer("John");

// readonly이기땜시 에러뿜뿜🍖
// john.name = "John";

class Developer2 {
	readonly name2: string;
	constructor(readonly name2: string) { }
}