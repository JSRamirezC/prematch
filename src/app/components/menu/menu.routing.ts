import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'listar/:categoryId',
        component: ListaComponent,
        pathMatch: 'full'
    },
    {
        path: 'detalle',
        component: DetalleComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule {

}