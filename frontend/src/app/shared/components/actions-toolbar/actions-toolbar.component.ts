import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { Part } from '../../models/part.model';

@Component({
	selector: 'app-actions-toolbar',
	templateUrl: './actions-toolbar.component.html',
	styleUrls: ['./actions-toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsToolbarComponent implements OnInit {
	@Input() data?: Part[];
	@Input() orderBy?: 'asc' | 'desc';
	@Input() filterBy?: string;
	@Input() searchTerm?: string;
	@Output() $orderedData = new EventEmitter<Part[]>();
	@Output() $filteredData = new EventEmitter<Part[]>();
	@Output() $queryResult = new EventEmitter<Part[]>();

	constructor() {}

	ngOnInit(): void {}

	sortData(): void {
		if (this.orderBy === 'asc') {
			this.$orderedData.emit(
				this.data!.sort((a, b) => (a.price < b.price ? 1 : -1))
			);
		} else {
			this.$orderedData.emit(
				this.data!.sort((a, b) => (a.price < b.price ? -1 : 1))
			);
		}
	}

	filterData(): void {
		this.$filteredData.emit(
			this.data!.filter((element: Part) => this.filterBy! === element.type)
		);
	}

	searchQuery(): void {
		this.$queryResult.emit(
			this.data!.map((element: Part) => Object.values(element))
				.reduce((acc, curr) => acc.concat(curr))
				.filter(
					(element: string) =>
						element.toLowerCase().indexOf(this.searchTerm!.toLowerCase()) > -1
				)
		);
	}
}
