import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PartTypesService } from './core/services/part-types.service';
import { PartsService } from './core/services/parts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private _partsService: PartsService, private _partTypesService: PartTypesService) { }

  ngOnInit(): void {
    this._partsService.getParts().pipe(
      tap(console.log)
    ).subscribe();

    this._partTypesService.getPartTypes().pipe(
      tap(console.log)
    ).subscribe();
  }
}
