import {ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from '@angular/router'
import * as fromRoutes from './commons/routes'
import {isAuthenticatedGuardFn, isNotAuthenticatedGuardFn, isTestEnvironment} from './service/guards'
import {inject} from '@angular/core'
import {TranslateService} from '@ngx-translate/core'
import {map, Observable} from 'rxjs'

function resolvePageTitle(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<string> {
  const translateService = inject(TranslateService)
  return translateService.get(`common.page-titles.${route.root.firstChild.url[0].path}`).pipe(
    map(translated => {
      return translated == null || typeof translated != 'string' || translated.length === 0 ?
        'PFCalc' :
        `PFCalc | ${translated}`
    }),
  )
}

export const routes: Routes = [
  {
    path: fromRoutes.dashboard,
    title: resolvePageTitle,
    loadComponent: () => import('./features/dashboard/dashboard-page.component').then(mod => mod.DashboardPageComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.signIn,
    title: resolvePageTitle,
    loadComponent: () => import('./features/auth/sign-in-page/sign-in-page.component').then(mod => mod.SignInPageComponent),
    canActivate: [isNotAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.signUp,
    title: resolvePageTitle,
    loadComponent: () => import('./features/auth/sign-up-page/sign-up-page.component').then(mod => mod.SignUpPageComponent),
    canActivate: [isNotAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.completeProfile,
    title: resolvePageTitle,
    loadComponent: () => import('./features/auth/configure-profile/configure-profile.component').then(mod => mod.ConfigureProfileComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.foodsManagement,
    title: resolvePageTitle,
    loadComponent: () => import('./features/foods-management/foods-management-page.component').then(mod => mod.FoodsManagementPageComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.addMeal,
    title: resolvePageTitle,
    data: {
      hideHeader: true,
      defaultBackNavigationUrl: fromRoutes.dashboard,
    },
    loadComponent: () => import('./features/add-meal/add-meal.component').then(mod => mod.AddMealComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.addFood,
    title: resolvePageTitle,
    data: {
      hideHeader: true,
      defaultBackNavigationUrl: fromRoutes.foodsManagement,
    },
    loadComponent: () => import('./features/add-food/add-food.component').then(mod => mod.AddFoodComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.settings,
    title: resolvePageTitle,
    loadComponent: () => import('./features/settings/settings.component').then(mod => mod.SettingsComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.reports,
    title: resolvePageTitle,
    loadComponent: () => import('./features/reports/reports.component').then(mod => mod.ReportsComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: 'test',
    title: 'PFCalc | TEST',
    loadComponent: () => import('./features/test-page/test-page.component').then(mod => mod.TestPageComponent),
    canMatch: [isTestEnvironment],
  },
  {
    path: '**',
    title: resolvePageTitle,
    redirectTo: `/${fromRoutes.dashboard}`,
  },
]
