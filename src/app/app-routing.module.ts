import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './mc/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabbar', loadChildren: './employer/tabbar/tabbar.module#TabbarPageModule' },

  // employer-------------
  { path: 'employer/profileem/editprofileemployer', loadChildren: './employer/editprofileemployer/editprofileemployer.module#EditprofileemployerPageModule' },
  { path: 'employer/profileem/editprofileemployer/:employer_id/:employ_id/:fname/:lname/:location/:info', loadChildren: './employer/editprofileemployer/editprofileemployer.module#EditprofileemployerPageModule' },
  { path: 'employer/homeem/show-profilemc/:employer_id/:employ_id/:fname/:lname/', loadChildren: './employer/show-profilemc/show-profilemc.module#ShowProfilemcPageModule' },	  
  
  { path: 'employer/createmyjob', loadChildren: './employer/createmyjob/createmyjob.module#CreatemyjobPageModule' },
  { path: 'employer/profileem/uploadprofile', loadChildren: './employer/uploadprofile/uploadprofile.module#UploadprofilePageModule' },
  { path: 'employer/profileem/uploadprofile/:employer_id/:img_profile', loadChildren: './employer/uploadprofile/uploadprofile.module#UploadprofilePageModule' },
  
  // mc-------------
  { path: 'mc/createprofile', loadChildren: './mc/createprofile/createprofile.module#CreateprofilePageModule' },
  { path: 'mc/createprofile2', loadChildren: './mc/createprofile2/createprofile2.module#Createprofile2PageModule' },
  { path: 'mc/upload-profile', loadChildren: './mc/upload-profile/upload-profile.module#UploadProfilePageModule' },

  { path: 'detailmc/:mc_id/:mcs_id/:fname/:lname/:location/:genders', loadChildren: './employer/detailmc/detailmc.module#DetailmcPageModule' },
 



  
  

  
  


 
 

  
  



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
