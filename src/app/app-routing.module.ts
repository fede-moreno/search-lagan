import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutes} from './enums/app-routes.enum';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: AppRoutes.HOME, component: HomeComponent
  },
  {
    path: AppRoutes.SETTINGS,
    loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path: '**',
    redirectTo: `/${AppRoutes.HOME}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
