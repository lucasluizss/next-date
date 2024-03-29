import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full',
	},
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: '',
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
			{
				path: 'about',
				loadChildren: () => import('./views/about/about.module').then(x => x.AboutModule),
			},
		],
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
