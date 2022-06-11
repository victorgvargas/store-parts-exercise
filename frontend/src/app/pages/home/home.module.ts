import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		SharedModule,
		MatListModule,
		MatProgressSpinnerModule,
		FlexLayoutModule,
		HomeRoutingModule,
	],
})
export class HomeModule {}
