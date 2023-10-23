import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as fromRoutes from './commons/routes';
import {
  isAuthenticatedGuardFn,
  isNotAuthenticatedGuardFn,
  isTestEnvironment,
  profileConfiguredGuardFn,
} from "./service/guards";

const routes: Routes = [
  {
    path: fromRoutes.dashboard,
    loadComponent: () => import('./pages/dashboard-page/dashboard-page.component').then(mod => mod.DashboardPageComponent),
    canActivate: [isAuthenticatedGuardFn, profileConfiguredGuardFn],
  },
  {
    path: fromRoutes.signIn,
    loadComponent: () => import('./pages/sign-in-page/sign-in-page.component').then(mod => mod.SignInPageComponent),
    canActivate: [isNotAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.signUp,
    loadComponent: () => import('./pages/sign-up-page/sign-up-page.component').then(mod => mod.SignUpPageComponent),
    canActivate: [isNotAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.completeProfile,
    loadComponent: () => import('./pages/configure-profile/configure-profile.component').then(mod => mod.ConfigureProfileComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.foodsManagement,
    loadComponent: () => import('./pages/foods-management-page/foods-management-page.component').then(mod => mod.FoodsManagementPageComponent),
    canActivate: [isAuthenticatedGuardFn, profileConfiguredGuardFn]
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test-page/test-page.component').then(mod => mod.TestPageComponent),
    canMatch: [isTestEnvironment]
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
