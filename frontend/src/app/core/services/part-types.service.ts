import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartTypesService {

  constructor(private _http: HttpClient) { }

  getPartTypes(): Observable<string[]> {
    return this._http.get<string[]>(`${environment.baseURL}/part-types`);
  }
}
