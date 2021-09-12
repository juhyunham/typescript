{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7
		private coffeeBeansGram: number = 0;

		constructor(beans: number) {
			this.coffeeBeansGram = beans;
		}

		fillCoffeeBeans(beans: number) {
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

		protected abstract extract(shots: number): CoffeeCup;

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class CaffeeLatteeMachine extends CoffeeMachine {
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}

		private steamMiik(): void {
			console.log(`Steaming some milk...🥛`);
		}

		protected extract(shots: number): CoffeeCup {
			this.steamMiik();
			return {
				shots,
				hasMilk: true
			}
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		protected extract(shots: number): CoffeeCup {
			return {
				shots,
				hasSugar: true
			}
		}
	}

	const machines = [
		new CaffeeLatteeMachine(16, `H`),
		new SweetCoffeeMaker(16),
		new CaffeeLatteeMachine(16, `1`),
		new SweetCoffeeMaker(16)
	]

	machines.forEach(machine => {
		console.log(`-----------------------`);
		machine.makeCoffee(1);
	})
}