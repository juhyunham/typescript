interface Employee {
	pay(): void
}

class FullTimeEmployee implements Employee {
	pay() {
		console.log(`full time!!`)
	}

	workFullTime() { }
}

class PartTimeEmployee implements Employee {
	pay() {
		console.log(`part time!!`)
	}

	workPartTime() { }
}

// 자동으로 월급 지불! 
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 소스는 💩!
function payBad(employee: Employee): Employee {
	employee.pay();
	return employee;
}

function pay<T extends Employee>(employeee: T): T {
	employeee.pay();
	return employeee;
}

const hamju = new FullTimeEmployee();
const bob = new PartTimeEmployee();

hamju.workFullTime();
bob.workPartTime();

const hamjuAfterPay = pay(hamju);
const bobAfterPay = pay(bob);

const obj = {
	name: `ham`,
	age: 31
}

const obj2 = {
	animal: `🐷`
}

// console.log(getValue(obj, `score`)) // score 가 없어서~ 에러뿜뿜!!
console.log(getValue(obj, `name`)) // ham
console.log(getValue(obj, `age`)) // 31
console.log(getValue(obj2, `animal`)) // 🐷

// keyof T : 그 obj 안에 있는 키들중에 하나여야함.
// return : T[K] 그 obj 있는 key가 가리키고 있는 value 타입이어야한다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}