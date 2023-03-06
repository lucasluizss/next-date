import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ActivityComponent } from './activity.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [{ path: '', component: ActivityComponent }];

@NgModule({
	declarations: [ActivityComponent],
	imports: [BrowserModule, CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppActivityModule {}
