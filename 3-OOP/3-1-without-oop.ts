{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	const BEANS_GRAM_PER_SHOT = 7
	let coffeeBeansGram: number = 0;

	const makeCoffee = (shots: number): CoffeeCup => {
		if (coffeeBeansGram < shots * BEANS_GRAM_PER_SHOT) {
			throw new Error(`Not enough coffee beans!`)
		}

		coffeeBeansGram -= shots * BEANS_GRAM_PER_SHOT

		return {
			shots,
			hasMilk: false
		}
	}

	// 🥱
	coffeeBeansGram += 3 * BEANS_GRAM_PER_SHOT
	const coffee = makeCoffee(2);
	console.log(coffee)
}