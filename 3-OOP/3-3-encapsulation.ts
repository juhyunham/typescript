{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	// public
	// private
	// protected
	class CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7
		private coffeeBeansGram: number = 0;

		constructor(beans: number) {
			this.coffeeBeansGram = beans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans)
		}

		public fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error(`value for beans should be greater than 0`);
			}

			this.coffeeBeansGram += beans;
		}

		makeCoffee = (shots: number): CoffeeCup => {
			if (this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
				throw new Error(`Not enough coffee beans!`)
			}

			this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT

			return {
				shots,
				hasMilk: false
			}
		}
	}

	const maker = new CoffeeMaker(32);
	// maker.coffeeBeansGram = 3;
	// maker.coffeeBeansGram = -34; // invalid💩

	maker.fillCoffeeBeans(32)
	class User {
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`
		}

		private internalAge = 4
		get age(): number {
			return this.internalAge;
		}

		set age(num: number) {
			if (num < 0) {
				throw new Error(`value should be greater than 0`);
			}

			this.internalAge = num;
		}

		constructor(private firstName: string, private lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
		}
	}

	const user = new User(`Steve`, `Jobs`)
	console.log(user.fullName)
	user.age = 6
	console.log(user)
}