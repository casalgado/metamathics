class Page {
	constructor(size, number) {
		this.size = size;
		this.number = number;
	}

	static letter() {
		return new Page('letter', '1');
	}
}
