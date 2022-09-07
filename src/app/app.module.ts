import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomModule } from './custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { MenuResultComponent } from './components/menu-result/menu-result.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    HomePrincipalComponent,
    MenuResultComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    CustomModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    FlexLayoutModule
  ],
    
    providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
