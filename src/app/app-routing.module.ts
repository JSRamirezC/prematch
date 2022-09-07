import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuModule } from './components/admin/admin-menu.module';
import { AdminComponent } from './components/admin/admin.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { MenuResultComponent } from './components/menu-result/menu-result.component';
import { MenuResultModule } from './components/menu-result/menu-result.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from './components/menu/menu.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: 'Menu',
    component: MenuComponent,
    loadChildren: () => import('./components/menu/menu.module').then((m) => MenuModule)
  },
  {
    path: 'MenuResult',
    component: MenuResultComponent,
    loadChildren: () => import('./components/menu-result/menu-result.module').then((m) => MenuResultModule)
  },
  {
    path: 'Admin',
    component: AdminComponent,
    loadChildren: () => import('./components/admin/admin-menu.module').then((m) => AdminMenuModule)
  },
  {
    path: 'home',
    component: HomePrincipalComponent,
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
