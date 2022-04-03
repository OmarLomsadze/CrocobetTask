import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  // დალაგებულია ლინკების შესაბამისი კომპონენტები
  {
    path: '',
    loadChildren: () => import('./shared/components/layout/layout.module').then((m) => m.LayoutModule)
  },
  {path: 'Error', component: ErrorComponent},
  // ნებისმიერი სხვა ლინკის გამოძახებით რომელიც წინასწარ გაწერილი არაა, გადამისამართდება /Error  ლინკზე
  {path: '**', redirectTo: '/Error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
