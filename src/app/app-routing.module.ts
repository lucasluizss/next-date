import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/activity',
		pathMatch: 'full',
	},
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: 'activity',
				loadChildren: () =>
					import('./views/activity/activity.module').then(x => x.AppActivityModule),
			},
			{
				path: 'shared-experiences',
				loadChildren: () =>
					import('./views/shared-experiences/shared-experiences.module').then(
						x => x.SharedExperiencesModule
					),
			},
			{
				path: 'terms-of-use',
				loadChildren: () =>
					import('./views/terms-of-use/terms-of-use.module').then(
						x => x.TermsOfUseModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
