import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';



@NgModule({
  declarations: [Comp1Component, Comp2Component, Comp3Component],
  imports: [
    CommonModule, RouterModule.forChild([
      {path:"component1", component: Comp1Component},
      {path:"component2", component: Comp2Component},
      {path:"component3", component: Comp3Component}
    ])
  ]
})
export class Helper1Module { }
