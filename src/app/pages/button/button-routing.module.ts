import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonExampleComponent } from './button-example/button-example.component';

const routes: Routes = [
  {
    path: 'example',
    component: ButtonExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
