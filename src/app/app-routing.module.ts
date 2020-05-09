import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { NgModule } from '@angular/core';
import { UniversityComponent } from '../app/university/university.component';

const routes: Routes = [
  {
    path: 'publish',
    component: HomeComponent,
  },
  {
    path: '',
    component: UniversityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
