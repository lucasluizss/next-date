import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedExperiencesComponent } from './shared-experiences.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SharedExperiencesComponent }];

@NgModule({
	declarations: [SharedExperiencesComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SharedExperiencesModule {}
