import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogExampleComponent } from './dialog-example/dialog-example.component';

const routes: Routes = [
  {
    path: 'example',
    component: DialogExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogRoutingModule { }
