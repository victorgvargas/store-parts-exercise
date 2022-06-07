import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
  ],
  exports: [
    ListItemComponent
  ]
})
export class SharedModule { }
