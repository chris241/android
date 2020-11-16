import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
  {
    path: 'appartements',
    loadChildren: () => import('./pages/appartements/appartements.module').then(m => m.AppartementsPageModule)
  },
  {
    path: 'alertes',
    loadChildren: () => import('./pages/alertes/alertes.module').then(m => m.AlertesPageModule)
  },

  {
    path: 'appartement',
    loadChildren: () => import('./pages/appartement/appartement.module').then(m => m.AppartementPageModule)
  },
  {
    path: 'operations',
    loadChildren: () => import('./pages/operations/operations.module').then(m => m.OperationsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then(m => m.LocationPageModule)
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
