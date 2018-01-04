import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTintucComponent } from './list-tintuc/list-tintuc.component';
import { DetailTintucComponent } from './detail-tintuc/detail-tintuc.component';
import { TinTuc } from './tintuc.model';
import { AddTintucComponent } from './add-tintuc/add-tintuc.component';
import { EditTintucComponent } from './edit-tintuc/edit-tintuc.component';

const routes: Routes = [
 { path: 'home', component: ListTintucComponent },
 { path: 'detail/:ma', component: DetailTintucComponent },
 { path: 'edit/:ma', component: EditTintucComponent },
 { path: 'add', component: AddTintucComponent },
 // chạy chương trình vào trang /home
 { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule { }
