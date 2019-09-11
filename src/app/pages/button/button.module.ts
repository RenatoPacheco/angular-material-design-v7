import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonExampleComponent } from './button-example/button-example.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ButtonExampleComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule
  ]
})
export class ButtonModule { }
