import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import { SummaComponent } from './pages/summa/summa.component';


/**
 * Задаются пути до компонентов
 */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'summa',
    component: SummaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
