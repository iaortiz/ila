import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTopicRoutingModule } from './main-topic-routing.module';
import { LayerComponent } from './layer/layer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { GridResoursesComponent } from './components/grid-resourses/grid-resourses.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CardResourceComponent } from './components/card-resource/card-resource.component';


@NgModule({
  declarations: [
    LayerComponent,
    SideBarComponent,
    GridResoursesComponent,
    CardResourceComponent
  ],
  imports: [
    CommonModule,
    MainTopicRoutingModule,
    MaterialModule
  ]
})
export class MainTopicModule { }
