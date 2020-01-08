import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabbarPage } from './tabbar.page';

const routes: Routes = [
  {
    path: '',
    component: TabbarPage,
    children: [
      { path: 'employer/homeem', loadChildren: '../homeem/homeem.module#HomeemPageModule' },
			{ path: 'employer/myjobem', loadChildren: '../myjobem/myjobem.module#MyjobemPageModule' },
      { path: 'employer/bookmarkem', loadChildren: '../bookmarkem/bookmarkem.module#BookmarkemPageModule' },
			{ path: 'employer/notificationem', loadChildren: '../notificationem/notificationem.module#NotificationemPageModule' },
      { path: 'employer/profileem', loadChildren: '../profileem/profileem.module#ProfileemPageModule' },	
     
        
		]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabbarPageRoutingModule {}
