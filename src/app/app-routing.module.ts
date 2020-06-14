import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/components/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/components/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
