import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogDataUserComponent } from './dialog-data-user/dialog-data-user.component';

@NgModule({
  declarations: [DialogExampleComponent, DialogDataUserComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    SharedModule
  ],
  entryComponents: [
    DialogDataUserComponent
  ]
})
export class DialogModule { }
