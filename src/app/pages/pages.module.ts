import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//Modulo importado compartido
import { SheredModule } from '../shared/shered.module';
//import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';






@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent    
  ],
  imports: [
    CommonModule,
    SheredModule,
    //AppRoutingModule
    RouterModule,
    FormsModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
