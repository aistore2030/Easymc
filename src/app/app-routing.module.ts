import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './mc/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabbar', loadChildren: './employer/tabbar/tabbar.module#TabbarPageModule' },
  { path: 'employer/profileem/editprofileemployer', loadChildren: './employer/editprofileemployer/editprofileemployer.module#EditprofileemployerPageModule' },	
  { path: 'employer/homeem/:id/:user_id/:fname/:lname/:location/:info/:img_profile/:create_at', loadChildren: '../homeem/homeem.module#HomeemPageModule' },
  {
    path: 'create-myjobs',
    loadChildren: () => import('./employer/create-myjobs/create-myjobs.module').then( m => m.CreateMyjobsPageModule)
  },
  

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
