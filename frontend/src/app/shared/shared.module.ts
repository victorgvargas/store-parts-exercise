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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
	declarations: [ListItemComponent, ActionsToolbarComponent, SpinnerComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatListModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		MatIconModule,
		FlexLayoutModule,
	],
	exports: [ListItemComponent, ActionsToolbarComponent, SpinnerComponent],
})
export class SharedModule {}
