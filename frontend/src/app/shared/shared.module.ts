import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ActionsToolbarComponent } from './components/actions-toolbar/actions-toolbar.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ListItemComponent, ActionsToolbarComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatListModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		FlexLayoutModule,
	],
	exports: [ListItemComponent, ActionsToolbarComponent],
})
export class SharedModule {}
