{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7
		private coffeeBeansGram: number = 0;

		constructor(beans: number) {
			this.coffeeBeansGram = beans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans)
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

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots...🥤`);

			return {
				shots,
				hasMilk: false
			}
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	// 우유 거품기
	class CheapMilkSteamer {
		private steamMilk(): void {
			console.log(`Steaming some milk...🥛`);
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk()
			return {
				...cup,
				hasMilk: true
			}
		}
	}

	// 설탕 제조기
	class AutomaticSugarMixer {
		private getSugar() {
			console.log(`Getting some sugar from jar 🍭`);
			return true
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar()
			return {
				...cup,
				hasSugar: sugar
			}
		}
	}

	class CaffeeLatteeMachine extends CoffeeMachine {
		constructor(beans: number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer) {
			super(beans);
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milkFrother.makeMilk(coffee)
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		constructor(private beans: number, private sugar: AutomaticSugarMixer) {
			super(beans)
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee)
		}
	}

	class SweetCaffeLatteMachine extends CoffeeMachine {
		constructor(private beans: number, private milk: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
			super(beans);
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milk.makeMilk(this.sugar.addSugar(coffee))
		}
	}

	const machines = [
		new CoffeeMachine(16),
		new CaffeeLatteeMachine(16, `H`),
		new SweetCoffeeMaker(16),
		new CoffeeMachine(16),
		new CaffeeLatteeMachine(16, `1`),
		new SweetCoffeeMaker(16)
	]

	for (const machine of machines) {
		console.log(`-----------------------`);
		machine.makeCoffee(1)
	}
}