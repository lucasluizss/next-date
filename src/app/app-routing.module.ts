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
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
