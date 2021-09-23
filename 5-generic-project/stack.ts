// interface를 사용하면 좋은점은 나중에 사용할 사람들이 사용하기 편리함.
interface Stack<T> {
	readonly size: number;
	push(value: T): void;
	pop(): T
}

type StackNode<T> = {
	readonly value: T;
	readonly next?: StackNode<T>;
	// readonly next: StackNode | undefined;
}

// 조건: 배열을 쓰지 않고 구현!
class StackImpl<T> implements Stack<T> {
	private _size: number = 0;
	private head?: StackNode<T>;

	// optional로 설정해주는게 좋음!
	constructor(private capacity: number) { }

	get size() {
		return this._size;
	}

	push(value: T) {
		if (this.size === this.capacity) {
			throw new Error(`Stack is full!!!`)
		}

		const node: StackNode<T> = { value, next: this.head }
		this.head = node
		this._size++;
	}

	pop(): T {
		if (this.head == null) {
			throw new Error(`Stack is empty`)
		}
		const node = this.head
		this.head = node.next
		this._size--

		return node.value
	}
}

const stack = new StackImpl<string>(10);
stack.push(`ham`);
stack.push(`ju`);
stack.push(`hyun3`);

while (stack.size !== 0) {
	console.log(stack.pop())
}

const stack2 = new StackImpl<number>(10);
stack2.push(1)
stack2.push(2)
stack2.push(4)
stack2.push(5)

while (stack2.size !== 0) {
	console.log(stack2.pop())
}