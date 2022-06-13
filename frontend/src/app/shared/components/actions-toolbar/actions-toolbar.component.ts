import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { SubSink } from 'subsink';
import { Part } from '../../models/part.model';

@Component({
	selector: 'app-actions-toolbar',
	templateUrl: './actions-toolbar.component.html',
	styleUrls: ['./actions-toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsToolbarComponent implements OnInit {
	@Input() data?: Part[];
	@Output() orderedData$ = new EventEmitter<Part[]>();
	@Output() filteredData$ = new EventEmitter<Part[]>();
	@Output() queryResult$ = new EventEmitter<Part[]>();
	extractedTypes: string[] = [];
	subs = new SubSink();

	constructor() {}

	ngOnInit(): void {
		this._extractTypes();
	}

	sortData(orderBy: 'asc' | 'desc'): void {
		if (orderBy === 'asc') {
			this.orderedData$.emit(
				this.data!.sort((a, b) =>
					this._priceToNumber(a.price) < this._priceToNumber(b.price) ? -1 : 1
				)
			);
		} else {
			this.orderedData$.emit(
				this.data!.sort((a, b) =>
					this._priceToNumber(a.price) < this._priceToNumber(b.price) ? 1 : -1
				)
			);
		}
	}

	filterData(filterBy: string): void {
		this.filteredData$.emit(
			this.data!.filter((element: Part) => filterBy === element.type)
		);
	}

	searchQuery(event: Event): void {
		this.queryResult$.emit(
			this.data!.filter(
				(element: Part) =>
					element.name
						.toLowerCase()
						.indexOf((event.target as HTMLInputElement).value.toLowerCase()) >
					-1
			)
		);
	}

	private _extractTypes(): void {
		const allTypes: string[] = [];

		this.data!.forEach((element) => allTypes.push(element.type));
		this.extractedTypes = Array.from(new Set(allTypes));
	}

	private _priceToNumber(price: string): number {
		if (price.match(/[0-9]*\.[0-9]{2}\$/)) {
			return parseFloat(price.replace('$', ''));
		} else throw new Error('Malformed price input!');
	}
}
