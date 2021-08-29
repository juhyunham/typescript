{
	let coordinate = { x: 0, y: 0 }
	const move = (direction: `up` | `down` | `left` | `right`) => {
		switch (direction) {
			case 'up':
				coordinate.y += 1
				break;
			case 'down':
				coordinate.y -= 1
				break;
			case 'left':
				coordinate.x -= 1
				break;
			case 'right':
				coordinate.x += 1
				break;
			default:
				throw new Error(`unknown direction: ${direction}`)
		}
	}

	console.log(coordinate)
	move(`up`)
	console.log(coordinate)
	move(`down`)
	console.log(coordinate)
	move(`left`)
	console.log(coordinate)
	move(`right`)
	console.log(coordinate)
}