import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/new',
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
				path: 'new',
				loadChildren: () =>
					import('./views/activity-selector/activity-selector.module').then(
						x => x.AppActivitySelectorModule
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
