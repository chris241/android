import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'entities',
        children: [
          {
            path: '',
            loadChildren: '../entities/entities.module#EntitiesPageModule'
          }
        ]
      },
      {
        path: 'alertes',
        children: [
          {
            path: '',
            loadChildren: '../alertes/alertes.module#AlertesPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: '../account/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: 'appartements',
        children: [
          {
            path: '',
            loadChildren: '../appartements/appartements.module#AppartementsPageModule'
          },
        ]
      },
      {
        path: 'appartement/:id',
        children: [
          {
            path: '',
            loadChildren: '../appartement/appartement.module#AppartementPageModule'
          },
        ]
      },
      {
        path: 'operations',
        children: [
          {
            path: '',
            loadChildren: '../operations/operations.module#OperationsPageModule'
          },
        ]
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: '../contacts/contacts.module#ContactsPageModule'
          },
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsPageModule'
          },
        ]
      },
      {
        path: 'location/:id',
        children: [
          {
            path: '',
            loadChildren: '../location/location.module#LocationPageModule'
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
