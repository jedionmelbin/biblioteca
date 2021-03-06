import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DisposicionComponent} from './disposicion/disposicion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactsComponent
  },
  {
    path: 'disposicion',
    component: DisposicionComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'libro',
    loadChildren: () => import('./libro/libro.module').then(m => m.LibroModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./autor/autor.module').then(m => m.AutorModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then(m => m.ReservaModule)
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule {
}
