import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ActivitySelectorComponent } from './activity-selector.component';

const routes: Routes = [{ path: '', component: ActivitySelectorComponent }];

@NgModule({
	declarations: [ActivitySelectorComponent],
	imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppActivitySelectorModule {}
