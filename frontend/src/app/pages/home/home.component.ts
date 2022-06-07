import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PartsService } from 'src/app/core/services/parts.service';
import { Part } from 'src/app/shared/models/part.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  parts: Part[] = [];

  constructor(private _partsService: PartsService) { }

  ngOnInit(): void {
    this._partsService.getParts().pipe(
      tap(parts => this.parts = parts)
    ).subscribe();
  }

  stringifyPart(part: Part): string[] {
    return Object.values(part);
  }
}
