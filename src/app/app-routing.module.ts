import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.gurd';


const routes: Routes = [
  { path: 'accountmanagement', loadChildren: () => import('./accountmanagement/accountmanagement.module').then(m => m.AccountmanagementModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
