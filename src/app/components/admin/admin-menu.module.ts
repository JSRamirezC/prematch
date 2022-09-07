import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminMenuRoutingModule } from "./admin-menu.routing";
import { NgxDropzoneModule } from "ngx-dropzone";
import { NewCategoryComponent } from "./new-category/new-category.component";
import { NewEventsComponent } from "./new-events/new-events.component";
import { EditEventsComponent } from "./edit-events/edit-events.component";
import { ListEventsComponent } from "./list-events/list-events.component";
import { HomeEditComponent } from "./home-edit/home-edit.component";


@NgModule({
  imports: [  
    CommonModule, 
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AdminMenuRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [
    ListEventsComponent,
    EditEventsComponent,
    NewEventsComponent,
    NewCategoryComponent,
    HomeEditComponent
  ],
  providers:[
    
  ]
})
export class AdminMenuModule {
}