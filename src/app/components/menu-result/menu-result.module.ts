import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuResultRoutingModule } from "./menu-result.routing";

import { NgxDropzoneModule } from "ngx-dropzone";
import { ResultComponent } from "./result/result.component";
import { ResultDetailComponent } from "./result-detail/result-detail.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [  
    CommonModule, 
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MenuResultRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [
    ResultComponent,
    ResultDetailComponent,
    HomeComponent
  ],
  providers:[
    
  ]
})
export class MenuResultModule {
}