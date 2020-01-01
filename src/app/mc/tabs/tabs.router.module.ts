import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{ path: 'mc/home', loadChildren: '../home/home.module#HomePageModule' },
			{ path: 'mc/myjob', loadChildren: '../myjob/myjob.module#MyjobPageModule' },
			{ path: 'mc/bookmark', loadChildren: '../bookmark/bookmark.module#BookmarkPageModule' },
			{ path: 'mc/notification', loadChildren: '../notification/notification.module#NotificationPageModule' },
			{ path: 'mc/profile', loadChildren: '../profile/profile.module#ProfilePageModule' },	
			{ path: 'mc/myjob/showdetail', loadChildren: '../showdetail/showdetail.module#ShowdetailPageModule' },	
		]
	}	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
  