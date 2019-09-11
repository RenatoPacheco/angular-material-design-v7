import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DialogExampleComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    SharedModule
  ]
})
export class DialogModule { }
