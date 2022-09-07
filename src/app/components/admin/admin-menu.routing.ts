import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { NewCategoryComponent } from "./new-category/new-category.component";
import { NewEventsComponent } from "./new-events/new-events.component";
import { EditEventsComponent } from "./edit-events/edit-events.component";
import { ListEventsComponent } from "./list-events/list-events.component";
import { HomeEditComponent } from "./home-edit/home-edit.component";

const routes: Routes = [
    {
        path: 'homeAdmin',
        component: HomeEditComponent,
        pathMatch: 'full'
    },
    {
        path: 'listEventsEdit/:categoryId',
        component: ListEventsComponent,
        pathMatch: 'full'
    },
    {
        path: 'eventsEdit/:detalleId',
        component: EditEventsComponent,
        pathMatch: 'full'
    },
    {
        path: 'newEvents/:detalleId',
        component: NewEventsComponent,
        pathMatch: 'full'
    },
    {
        path: 'newCategory/:detalleId',
        component: NewCategoryComponent,
        pathMatch: 'full'
    }, 
    {   path: '', 
        redirectTo: 'homeAdmin', 
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
export class AdminMenuRoutingModule {

}