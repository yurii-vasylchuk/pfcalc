import {Routes} from '@angular/router';
import * as fromRoutes from './commons/routes';
import {isAuthenticatedGuardFn, isNotAuthenticatedGuardFn, profileConfiguredGuardFn} from "./service/guards";

export const routes: Routes = [
  {
    path: fromRoutes.dashboard,
    loadComponent: () => import('./features/dashboard/dashboard-page.component').then(mod => mod.DashboardPageComponent),
    canActivate: [isAuthenticatedGuardFn, profileConfiguredGuardFn],
  },
  {
    path: fromRoutes.signIn,
    loadComponent: () => import('./features/auth/sign-in-page/sign-in-page.component').then(mod => mod.SignInPageComponent),
    canActivate: [isNotAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.signUp,
    loadComponent: () => import('./features/auth/sign-up-page/sign-up-page.component').then(mod => mod.SignUpPageComponent),
    canActivate: [isNotAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.completeProfile,
    loadComponent: () => import('./features/auth/configure-profile/configure-profile.component').then(mod => mod.ConfigureProfileComponent),
    canActivate: [isAuthenticatedGuardFn],
  },
  {
    path: fromRoutes.foodsManagement,
    loadComponent: () => import('./features/foods-management/foods-management-page.component').then(mod => mod.FoodsManagementPageComponent),
    canActivate: [isAuthenticatedGuardFn, profileConfiguredGuardFn],
  },
  {
    path: fromRoutes.addMeal,
    data: {
      hideHeader: true,
      defaultBackNavigationUrl: fromRoutes.dashboard,
    },
    loadComponent: () => import('./features/add-meal/add-meal.component').then(mod => mod.AddMealComponent),
    canActivate: [isAuthenticatedGuardFn, profileConfiguredGuardFn],
  },
  {
    path: fromRoutes.addDish,
    data: {
      hideHeader: true,
      defaultBackNavigationUrl: fromRoutes.addMeal,
    },
    loadComponent: () => import('./features/add-dish/add-dish.component').then(mod => mod.AddDishComponent),
    canActivate: [isAuthenticatedGuardFn, profileConfiguredGuardFn],
  },
  {
    path: fromRoutes.addFood,
    data: {
      hideHeader: true,
      defaultBackNavigationUrl: fromRoutes.foodsManagement,
    },
    loadComponent: () => import('./features/add-food/add-food.component').then(mod => mod.AddFoodComponent),
    canActivate: [isAuthenticatedGuardFn, profileConfiguredGuardFn],
  },
  // {
  //   path: '**',
  //   loadComponent: () => import('./features/test-page/test-page.component').then(mod => mod.TestPageComponent),
  //   canMatch: [isTestEnvironment],
  // },
  {
    path: '**',
    redirectTo: `/${fromRoutes.dashboard}`,
  },
];
