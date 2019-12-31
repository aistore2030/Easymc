import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{ path: 'home', loadChildren: '../home/home.module#HomePageModule' },
			{ path: 'myjob', loadChildren: '../myjob/myjob.module#MyjobPageModule' },
			{ path: 'bookmark', loadChildren: '../bookmark/bookmark.module#BookmarkPageModule' },
			{ path: 'notification', loadChildren: '../notification/notification.module#NotificationPageModule' },
			{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },	
		]
	}	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
  