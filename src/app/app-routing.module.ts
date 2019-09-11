import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'button',
    loadChildren: './pages/button/button.module#ButtonModule'
  },
  {
    path: 'dialog',
    loadChildren: './pages/dialog/dialog.module#DialogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
