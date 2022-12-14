import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ResultDetailComponent } from "./result-detail/result-detail.component";
import { ResultComponent } from "./result/result.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'result/:categoryId',
        component: ResultComponent,
        pathMatch: 'full'
    },
    {
        path: 'resdetalle/:detalleId',
        component: ResultDetailComponent,
        pathMatch: 'full'
    }, 
    {   path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuResultRoutingModule {

}