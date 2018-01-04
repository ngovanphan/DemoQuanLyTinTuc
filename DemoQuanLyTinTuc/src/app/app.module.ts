import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListTintucComponent } from './list-tintuc/list-tintuc.component';
import { TintucService } from './tintuc.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { DetailTintucComponent } from './detail-tintuc/detail-tintuc.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTintucComponent } from './add-tintuc/add-tintuc.component';
import { EditTintucComponent } from './edit-tintuc/edit-tintuc.component';
@NgModule({
  declarations: [
    AppComponent,
    ListTintucComponent,
    DetailTintucComponent,
    AddTintucComponent,
    EditTintucComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TintucService],
  bootstrap: [AppComponent]
})
export class AppModule { }
