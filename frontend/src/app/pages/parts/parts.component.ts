import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
import { PartsService } from 'src/app/core/services/parts.service';
import { Part } from 'src/app/shared/models/part.model';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-parts',
	templateUrl: './parts.component.html',
	styleUrls: ['./parts.component.scss'],
})
export class PartsComponent implements OnInit, OnDestroy {
	subs = new SubSink();
	parts!: Part[];
	loading = false;

	constructor(
		private _partsService: PartsService,
		private _loadingService: LoadingService
	) {}

	ngOnInit(): void {
		this.subs.add(
			this._loadingService.loading$
				.pipe(tap((loading) => (this.loading = loading)))
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
}
