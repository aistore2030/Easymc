import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './mc/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabbar', loadChildren: './employer/tabbar/tabbar.module#TabbarPageModule' },
  { path: 'employer/profileem/editprofileemployer', loadChildren: './employer/editprofileemployer/editprofileemployer.module#EditprofileemployerPageModule' },
  { path: 'employer/profileem/editprofileemployer/:employer_id/:employ_id/:fname/:lname/:location/:info', loadChildren: './employer/editprofileemployer/editprofileemployer.module#EditprofileemployerPageModule' },
  
  { path: 'employer/homeem/show-profilemc/:employer_id/:employ_id/:fname/:lname/:location/:info', loadChildren: './employer/show-profilemc/show-profilemc.module#ShowProfilemcPageModule' },	  


  { path: 'employer/createmyjob', loadChildren: './employer/createmyjob/createmyjob.module#CreatemyjobPageModule' },

 
 

  
  



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
