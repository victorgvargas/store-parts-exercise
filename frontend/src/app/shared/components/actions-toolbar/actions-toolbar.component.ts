import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { tap } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
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
	actionsForm = this._fb.group({
		searchTerm: [''],
		orderBy: [''],
		filterBy: [''],
	});

	constructor(
		private _fb: FormBuilder,
		private _loadingService: LoadingService
	) {}

	ngOnInit(): void {
		this._loadingService.loading$
			.pipe(
				tap((loading) => {
					if (loading) this.extractTypes();
				})
			)
			.subscribe();
	}

	// sortData(): void {
	// 	if (this.orderBy === 'asc') {
	// 		this.$orderedData.emit(
	// 			this.data!.sort((a, b) => (a.price < b.price ? 1 : -1))
	// 		);
	// 	} else {
	// 		this.$orderedData.emit(
	// 			this.data!.sort((a, b) => (a.price < b.price ? -1 : 1))
	// 		);
	// 	}
	// }

	// filterData(): void {
	// 	this.$filteredData.emit(
	// 		this.data!.filter((element: Part) => this.filterBy! === element.type)
	// 	);
	// }

	searchQuery(event: Event): void {
		this.queryResult$.emit(
			this.data!.map((element: Part) => Object.values(element))
				.reduce((acc, curr) => acc.concat(curr))
				.filter(
					(element: string) =>
						element
							.toLowerCase()
							.indexOf((event.target as HTMLInputElement).value.toLowerCase()) >
						-1
				)
		);
	}

	extractTypes(): void {
		const allTypes: string[] = [];

		this.data!.forEach((element) => allTypes.push(element.type));
		this.extractedTypes = Array.from(new Set(allTypes));
	}
}
