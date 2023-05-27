import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsAuthenticatedGuard} from './service/is-authenticated.guard';
import {ProfileConfiguredGuard} from './service/profile-configured.guard';
import * as fromRoutes from './commons/routes';
import {IsNotAuthenticatedGuard} from './service/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: fromRoutes.dashboard,
    loadComponent: () => import('./pages/dashboard-page/dashboard-page.component').then(mod => mod.DashboardPageComponent),
    canActivate: [IsAuthenticatedGuard, ProfileConfiguredGuard],
  },
  {
    path: fromRoutes.signIn,
    loadComponent: () => import('./pages/sign-in-page/sign-in-page.component').then(mod => mod.SignInPageComponent),
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: fromRoutes.signUp,
    loadComponent: () => import('./pages/sign-up-page/sign-up-page.component').then(mod => mod.SignUpPageComponent),
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: fromRoutes.completeProfile,
    loadComponent: () => import('./pages/configure-profile/configure-profile.component').then(mod => mod.ConfigureProfileComponent),
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: fromRoutes.foodsManagement,
    loadComponent: () => import('./pages/foods-management-page/foods-management-page.component').then(mod => mod.FoodsManagementPageComponent),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: `/${fromRoutes.dashboard}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
