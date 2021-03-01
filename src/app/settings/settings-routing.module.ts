import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings.component';
import { NgModule } from '@angular/core';
import { AppRoutes } from '../shared/enums/app-routes.enum';
import { DetailsComponent } from '../details/details.component';

export const routes: Routes = [
  { path: AppRoutes.HOME, component: SettingsComponent },
  { path: AppRoutes.DETAILS, component: DetailsComponent },
  {
    path: '**',
    redirectTo: `/${AppRoutes.SETTINGS}`,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
