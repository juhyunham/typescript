{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface CommercialCoffeMaker {
		makeCoffee(shots: number): CoffeeCup;
		fillCoffeeBeans(beans: number): void;
		clean(): void;
	}

	class CoffeeMachine implements CoffeeMaker, CommercialCoffeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7
		private coffeeBeansGram: number = 0;

		constructor(beans: number) {
			this.coffeeBeansGram = beans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans)
		}

		public fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error(`value for beans should be greater than 0`);
			}

			this.coffeeBeansGram += beans;
		}

		clean() {
			console.log(`cleaning the machine...🧺`)
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`)

			if (this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
				throw new Error(`Not enough coffee beans!`)
			}

			this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
		}

		private preheat(): void {
			console.log(`heating up...🔥`)
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots...🥤`);

			return {
				shots,
				hasMilk: false
			}
		}

		makeCoffee = (shots: number): CoffeeCup => {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class AmateurUser {
		constructor(private machine: CoffeeMaker) { }
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(`ama`, coffee)
		}
	}

	class ProBarista {
		constructor(private machine: CommercialCoffeMaker) { }
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			this.machine.fillCoffeeBeans(45)
			this.machine.clean();
			console.log(`pro`, coffee)
		}
	}

	const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
	const amateur = new AmateurUser(maker);
	const pro = new ProBarista(maker);
}