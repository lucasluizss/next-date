import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsOfUseComponent } from './terms-of-use.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TermsOfUseComponent }];

@NgModule({
	declarations: [TermsOfUseComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TermsOfUseModule {}
