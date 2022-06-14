import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from 'src/app/shared/models/part.model';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class PartsService {
	constructor(private _http: HttpClient) {}

	getParts(): Observable<Part[]> {
		return this._http.get<Part[]>(`${environment.baseURL}/parts`);
	}

	getPart(partName: string): Observable<Part> {
		return this._http.get<Part>(
			`${environment.baseURL}/parts?name=${partName}`
		);
	}
}
