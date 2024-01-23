import { Bar } from './Bar';

export class Foo<TBar extends Bar> extends class<TBar extends Bar = Bar> {
	public readonly bar: TBar;
	constructor(bar: TBar) {
		this.bar = bar;
	}
} {
	public constructor(bar: TBar) {
		super(bar);
	}
}
