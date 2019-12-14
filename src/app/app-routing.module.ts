import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';


const routes: Routes = [
  { path:"formone",component:Form1Component},
  {path:"formtwo",component:Form2Component},
  {path:"formthree",component:Form3Component},
  {path:"lazy" ,  
  loadChildren: () => import('./helper/helper.module').then(myMod => myMod.HelperModule)},
  {path:"lazy1" ,  
  loadChildren: () => import('./helper1/helper1.module').then(myMod => myMod.Helper1Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
