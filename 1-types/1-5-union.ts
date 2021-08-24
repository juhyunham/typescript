{
	//Union Types: OR

	type Direction = 'left' | 'right' | 'up' | 'down'

	function move(direction: Direction) {
		console.log(direction);
	}

	move('left')

	// 발생할 수 있는 모든케이스중에 하나만 할당할 수 있음 활용도높음ㄴㄴ
	type TileSize = 8 | 16 | 32;
	const tile: TileSize = 16

	// function: login -> success, fail
	type SuccessState = {
		response: {
			body: string;
		}
	}

	type FailState = {
		reason: string;
	}

	type LoginState = SuccessState | FailState
	function login(id: string, password: string): Promise<LoginState> {
		return {
			response: {
				body: 'logged in!'
			}
		}
	}

	// printLoginState(state)
	// success ->🎉 body
	// fail -> c reason
	function printLoginState(state: LoginState) {
		if ('response' in state) {
			console.log(`🎉 ${state.response.body}`)
		} else {
			console.log(`🎉 ${state.reason}`)
		}
	}
}