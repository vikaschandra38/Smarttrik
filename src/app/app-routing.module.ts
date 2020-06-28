import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SubstationUser1Component } from './components/substation-user1/substation-user1.component';
import { StreetlightUser1Component } from './components/streetlight-user1/streetlight-user1.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthTtdGuard } from './helpers/auth-ttd.guard';
import { RedirectGuardService } from './helpers/redirect-guard.service';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthTtdGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
        canActivate: [AuthTtdGuard],
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'substation',
        component: SubstationUser1Component,
        canActivate: [AuthTtdGuard],
        runGuardsAndResolvers: 'always',
       
      },
      {
        path: 'streetlight',
        component: StreetlightUser1Component,
        canActivate: [AuthTtdGuard],
        runGuardsAndResolvers: 'always',
      }
      ,
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthTtdGuard],
        runGuardsAndResolvers: 'always',
      }
    ]
  },
  {
    path: 'layout',
    pathMatch: 'full',
    redirectTo: '',
    canActivate: [RedirectGuardService]
  },
  { path: 'login', loadChildren: './login.module#LoginModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
