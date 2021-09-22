enum E {
	X = 5,
	Y = 8,
	Z
}

interface EI {
	X: number,
	Y?: number,
	Z: number
}

function getX(obj: { X: number, Y: number, Z: number }) {
	console.log(obj.Z)
	// return obj.X;
}

getX(E);

function getXI(obj: EI) {
	console.log(obj.Z)
	// return obj.X;
}

const K = {
	X: 7,
	Z: 16
}

getXI(K);


// Enum 쓰는 Case

const ham = {
	name: `juhyun`
}

ham.name // juhyun

enum Enum {
	A
}

let a = Enum.A // 0
let keyName = Enum[a]  //A  

const calendar = {
	Jan: 1,
	Feb: 2,
	Mar: 3
}

calendar["Jan"] //1

// enum 의 장점
enum calendarE {
	Jan = 1,
	Feb,
	Mar
}

console.log(calendarE.Jan)