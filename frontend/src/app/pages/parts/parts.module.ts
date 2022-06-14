import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing.module';
import { PartsComponent } from './parts.component';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [PartsComponent],
	imports: [
		CommonModule,
		PartsRoutingModule,
		MatCardModule,
		FlexLayoutModule,
		SharedModule,
	],
})
export class PartsModule {}
