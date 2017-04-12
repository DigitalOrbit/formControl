import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';

export const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    path: 'page-1',
    component: Page1Component
  },
  {
    path: 'page-2',
    component: Page2Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    Page1Component,
    Page2Component,
  ]
})
export class PagesModule { }
