import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	loading$ = new BehaviorSubject<boolean>(false);

	constructor() {}

	showLoading(): void {
		this.loading$.next(true);
	}

	hideLoading(): void {
		this.loading$.next(false);
	}
}
