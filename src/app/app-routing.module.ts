import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './shared/enums/app-routes.enum';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: AppRoutes.HOME, component: HomeComponent
  },
  {
    path: AppRoutes.SETTINGS,
    loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path: `${AppRoutes.DETAILS}/:login/:name`, component: DetailsComponent
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
