import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComponent } from './User/get/get.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { DeleteComponent } from './User/delete/delete.component';
import { FormsModule } from '@angular/forms'
import { UserServiceService } from './Services/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
