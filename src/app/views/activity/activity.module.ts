import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponent } from './activity.component';

const routes: Routes = [{ path: '', component: ActivityComponent }];

@NgModule({
	declarations: [ActivityComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppActivityModule {}
