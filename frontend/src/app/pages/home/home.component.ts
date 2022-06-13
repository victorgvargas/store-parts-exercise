import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
import { PartsService } from 'src/app/core/services/parts.service';
import { Part } from 'src/app/shared/models/part.model';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
	parts: Part[] = [];
	loading = false;
	subs = new SubSink();

	constructor(
		private _partsService: PartsService,
		private _loadingService: LoadingService
	) {}

	ngOnInit(): void {
		this.subs.add(
			this._loadingService.loading$
				.pipe(
					tap(console.log),
					tap((loading) => (this.loading = loading))
				)
				.subscribe()
		);

		this._loadingService.showLoading();

		this.subs.add(
			this._partsService
				.getParts()
				.pipe(
					tap((parts) => (this.parts = parts)),
					finalize(() => this._loadingService.hideLoading())
				)
				.subscribe()
		);
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	stringifyPart(part: Part): string[] {
		return Object.values(part);
	}

	updateData(data: Part[]): void {
		this.parts = data;
	}
}
