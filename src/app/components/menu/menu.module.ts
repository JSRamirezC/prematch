import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuRoutingModule } from "./menu.routing";
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { NgxDropzoneModule } from "ngx-dropzone";

@NgModule({
  imports: [  
    CommonModule, 
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MenuRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [
    ListaComponent,
    DetalleComponent,
    HomeComponent
  ],
  providers:[
    
  ]
})
export class MenuModule {
}