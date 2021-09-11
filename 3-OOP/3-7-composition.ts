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

	interface MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup
	}

	interface sugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup
	}

	// 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
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

	class FancyMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log(`Fancy Steaming some milk...🥛`);
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk()
			return {
				...cup,
				hasMilk: true
			}
		}
	}

	class ColdMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log(`Cold Steaming some milk...🥛`);
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
	class CandySugarMixer implements sugarProvider {
		private getSugar() {
			console.log(`Getting some sugar from candy 🍭`);
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

	class SugarMixer implements sugarProvider {
		private getSugar() {
			console.log(`Getting some sugar from jar!!!!`);
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
		constructor(beans: number, public readonly serialNumber: string, private milkFrother: MilkFrother) {
			super(beans);
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milkFrother.makeMilk(coffee)
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		constructor(private beans: number, private sugar: sugarProvider) {
			super(beans)
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee)
		}
	}

	class SweetCaffeLatteMachine extends CoffeeMachine {
		constructor(private beans: number, private milk: MilkFrother, private sugar: sugarProvider) {
			super(beans);
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milk.makeMilk(this.sugar.addSugar(coffee))
		}
	}

	// machine
	const cheapMilkMaker = new CheapMilkSteamer();
	const fancyMilkMaker = new FancyMilkSteamer();
	const coldMilkMaker = new ColdMilkSteamer();

	// sugar
	const candySugar = new CandySugarMixer();
	const sugar = new SugarMixer();

	const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
	const sweetMachine = new SweetCoffeeMaker(12, sugar);

	const latteMachine = new CaffeeLatteeMachine(12, `SS`, cheapMilkMaker);
	const coldLatteMachine = new CaffeeLatteeMachine(12, `SS`, coldMilkMaker);
	const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);
}