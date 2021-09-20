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
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 소스는 똥!
function payBad(employee: Employee): Employee {
	employee.pay();
	return employee;
}

function pay<T extends Employee>(employeee: T): T {
	employeee.pay();
	return employeee;
}

const ham = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ham.workFullTime();
bob.workPartTime();

const hamAfterPay = pay(ham);
const bobAfterPay = pay(bob);